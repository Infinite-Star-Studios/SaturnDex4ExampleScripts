#!/usr/bin/env node
"use strict";

/**
 * createPool.js
 *
 * Calls saturnliquidity.createPool() as a signed transaction.
 *
 * Required .env:
 *   PHANTASMA_WIF=<your wif key>
 */

const {
  PhantasmaKeys,
  ScriptBuilder,
  Transaction,
  PhantasmaAPI,
  Address,
  Base16,
} = require("phantasma-sdk-ts");
const dotenv = require("dotenv");

dotenv.config();

// ─── Config ───────────────────────────────────────────────────────────────────

const RPC_URL  = "https://devnet.phantasma.info/rpc";
const NEXUS    = "testnet";
const CHAIN    = "main";
const CONTRACT = "saturnliquidity";
const METHOD   = "createPool";

const GAS_PRICE = 100000;
const GAS_LIMIT = 1121000000;
const PAYLOAD   = Base16.encode("DEXv4-createPool");

// Token decimals
const SOUL_DECIMALS = 8;
const KCAL_DECIMALS = 10;

// ─── Setup ────────────────────────────────────────────────────────────────────

const WIF = process.env.PHANTASMA_WIF;
if (!WIF) {
  console.error("ERROR: PHANTASMA_WIF not set in .env file");
  process.exit(1);
}

const keys = PhantasmaKeys.fromWIF(WIF);
const rpc  = new PhantasmaAPI(RPC_URL, undefined, NEXUS);

// Resolve address cleanly
const ADDRESS_STR = keys.Address?.Text ?? keys.Address?.toString() ?? String(keys.Address);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toRaw(amount, decimals) {
  return (BigInt(amount) * 10n ** BigInt(decimals)).toString();
}

function fromRaw(raw, decimals) {
  const negative = raw.toString().startsWith("-");
  const abs = negative ? raw.toString().slice(1) : raw.toString();
  const s = abs.padStart(decimals + 1, "0");
  const whole = s.slice(0, s.length - decimals) || "0";
  const frac = s.slice(s.length - decimals);
  return `${negative ? "-" : ""}${whole}.${frac}`;
}

async function getBalance(symbol) {
  try {
    const account = await rpc.getAccount(ADDRESS_STR);
    if (account && account.balances) {
      for (const b of account.balances) {
        if (b.symbol === symbol) {
          return b.amount;
        }
      }
    }
    return "0";
  } catch (e) {
    console.error(`getBalance(${symbol}) error: ${e.message}`);
    return "0";
  }
}

// ─── Custom event decoding ────────────────────────────────────────────────────

function hexToUtf8(hex) {
  if (!hex || typeof hex !== "string") return null;
  try {
    return Buffer.from(hex, "hex").toString("utf8");
  } catch {
    return null;
  }
}

/**
 * Decodes simple VM string payloads like:
 *   04 0E 4265666F7265207769746E657373
 *   ^^ ^^
 *   |  └─ byte length
 *   └──── VM type = string
 */
function decodeCustomEventData(hex) {
  if (!hex || typeof hex !== "string") return null;

  const clean = hex.trim();
  if (!/^[0-9a-fA-F]+$/.test(clean) || clean.length < 4) {
    return null;
  }

  try {
    const typeByte = clean.slice(0, 2).toUpperCase();

    // VM string
    if (typeByte === "04") {
      const len = parseInt(clean.slice(2, 4), 16);
      const expectedHexLen = len * 2;
      const dataHex = clean.slice(4, 4 + expectedHexLen);

      if (dataHex.length === expectedHexLen) {
        return Buffer.from(dataHex, "hex").toString("utf8");
      }
    }

    // Fallback: try raw UTF-8 decode of whole blob
    const raw = hexToUtf8(clean);
    if (raw && /[ -~]/.test(raw)) {
      return raw;
    }

    return null;
  } catch {
    return null;
  }
}

async function createPool(args) {
  const sb = new ScriptBuilder();
  sb.AllowGas(keys.Address, Address.Null, GAS_PRICE, GAS_LIMIT);
  sb.CallContract(CONTRACT, METHOD, args);
  sb.SpendGas(keys.Address);

  const script = sb.EndScript();

  const expiration = new Date(Date.now() + 5 * 60 * 1000);
  const tx = new Transaction(NEXUS, CHAIN, script, expiration, PAYLOAD);
  tx.signWithKeys(keys);

  const txHex  = Base16.encodeUint8Array(tx.ToByteAray(true));
  const txHash = await rpc.sendRawTransaction(txHex);

  console.log(`TX: ${txHash}`);
  console.log(`Explorer: https://test-explorer.phantasma.info/tx/${txHash}`);

  await sleep(6000);

  const result = await rpc.getTransaction(txHash);
  return { txHash, result };
}

async function main() {
  console.log("═".repeat(60));
  console.log("  saturnliquidity.createPool");
  console.log("═".repeat(60));
  console.log(`  Wallet: ${ADDRESS_STR}`);
  console.log(`  RPC   : ${RPC_URL}`);
  console.log();

  const soulAmountRaw = toRaw(1000, SOUL_DECIMALS);
  const kcalAmountRaw = toRaw(1000, KCAL_DECIMALS);
  const feeBps        = 1000;

  const args = [
    keys.Address,
    soulAmountRaw,
    kcalAmountRaw,
    "SOUL",
    "KCAL",
    feeBps,
  ];

  console.log("Args:");
  console.log(`  Provider   : ${ADDRESS_STR}`);
  console.log(`  SOUL in    : ${soulAmountRaw} (${fromRaw(soulAmountRaw, SOUL_DECIMALS)})`);
  console.log(`  KCAL in    : ${kcalAmountRaw} (${fromRaw(kcalAmountRaw, KCAL_DECIMALS)})`);
  console.log(`  Token A    : SOUL`);
  console.log(`  Token B    : KCAL`);
  console.log(`  Fee        : ${feeBps}`);
  console.log();

  const soulBefore = await getBalance("SOUL");
  const kcalBefore = await getBalance("KCAL");

  console.log("Balances before:");
  console.log(`  SOUL: ${fromRaw(soulBefore, SOUL_DECIMALS)}`);
  console.log(`  KCAL: ${fromRaw(kcalBefore, KCAL_DECIMALS)}`);
  console.log();

  const { txHash, result } = await createPool(args);

  console.log();
  console.log("Raw result:");
  console.log(JSON.stringify(result, null, 2));
  console.log();

  if (result?.state === "Halt") {
    console.log("✓ SUCCESS");
  } else {
    console.log(`✗ FAILED — state: ${result?.state || "unknown"}`);
  }

  if (result?.events?.length) {
    console.log();
    console.log("Events:");
    for (const evt of result.events) {
      console.log(`  kind    : ${evt.kind}`);
      if (evt.contract) console.log(`  contract: ${evt.contract}`);
      if (evt.address)  console.log(`  address : ${evt.address}`);
      if (evt.data)     console.log(`  data    : ${evt.data}`);

      if (evt.kind === "Custom" && evt.data) {
        const decoded = decodeCustomEventData(evt.data);
        if (decoded !== null) {
          console.log(`  decoded : ${decoded}`);
        } else {
          console.log(`  decoded : <unable to decode custom data>`);
        }
      }

      console.log();
    }
  }

  const soulAfter = await getBalance("SOUL");
  const kcalAfter = await getBalance("KCAL");

  console.log("Balances after:");
  console.log(`  SOUL: ${fromRaw(soulAfter, SOUL_DECIMALS)}`);
  console.log(`  KCAL: ${fromRaw(kcalAfter, KCAL_DECIMALS)}`);
  console.log();

  const soulDiff = (BigInt(soulAfter) - BigInt(soulBefore)).toString();
  const kcalDiff = (BigInt(kcalAfter) - BigInt(kcalBefore)).toString();

  console.log("Balance changes:");
  console.log(`  SOUL diff: ${fromRaw(soulDiff, SOUL_DECIMALS)}`);
  console.log(`  KCAL diff: ${fromRaw(kcalDiff, KCAL_DECIMALS)}`);
  console.log();

  console.log(`Final tx hash: ${txHash}`);
}

main().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});