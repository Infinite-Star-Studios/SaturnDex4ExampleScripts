"use strict";

/**
 * common.js — shared plumbing for every example script in this repo.
 *
 * A script only names its contract, method and parameters and calls read()
 * or send() from here. Everything the Phantasma SDK needs is in this file,
 * step by step, so it doubles as a reference for your own bot:
 *
 *   READ  (free, no wallet): ScriptBuilder.BeginScript → CallContract →
 *         EndScript → PhantasmaAPI.invokeRawScript → decode each result.
 *   WRITE (signed): ScriptBuilder.AllowGas → CallContract → SpendGas →
 *         EndScript → Transaction → signWithKeys → sendRawTransaction →
 *         poll getTransaction until the chain reports Halt (success) or Fault.
 *
 * Settings (environment or .env):
 *   NETWORK=devnet | mainnet   default devnet — test there first
 *   SATURN_RPC_URL=...         optional, your own RPC node for the chosen network
 *   PHANTASMA_WIF=...          your wallet key, only for write scripts
 *   GAS_LIMIT=...              optional, overrides the script's gas limit
 */

const {
  PhantasmaAPI,
  PhantasmaKeys,
  ScriptBuilder,
  Transaction,
  Address,
  Base16,
  VMObject,
} = require("phantasma-sdk-ts");
require("dotenv").config();

const NETWORKS = {
  mainnet: { rpc: "https://pharpc1.phantasma.info/rpc", nexus: "mainnet", explorer: "https://explorer.phantasma.info/tx/" },
  devnet: { rpc: "https://devnet.phantasma.info/rpc", nexus: "testnet", explorer: "https://devnet-explorer.phantasma.info/tx/" },
};
const NETWORK = (process.env.NETWORK || "devnet").toLowerCase();
if (!NETWORKS[NETWORK]) {
  console.error(`NETWORK must be "devnet" or "mainnet" (got "${NETWORK}")`);
  process.exit(1);
}
const NET = { ...NETWORKS[NETWORK], rpc: process.env.SATURN_RPC_URL || NETWORKS[NETWORK].rpc };
const CHAIN = "main";
const api = new PhantasmaAPI(NET.rpc, undefined, NET.nexus);

// Gas, measured on mainnet and devnet at price 100000: a swap uses about
// 0.05 KCAL, a flash arbitrage about 0.11 KCAL. The node holds back
// price × limit KCAL up front and refunds what is not used, so the limit is
// a ceiling your wallet must be able to cover, not the fee.
const GAS_PRICE = 100000;
const DEFAULT_GAS_LIMIT = 2000000; // 20 KCAL ceiling for ordinary calls
const HEAVY_GAS_LIMIT = 300000000; // 3,000 KCAL ceiling: createPool / addLiquidity mint an LP-NFT series
const PAYLOAD = Base16.encode("SATURN_EXAMPLES");

/* ------------------------------------------------------------------ args */

function usage(spec, wallet) {
  const shown = spec.params.filter((p) => !(wallet && p === wallet));
  const lines = [`Usage: node ${spec.file} ${shown.map((p) => `<${p.name}>`).join(" ")}`.trim()];
  for (const p of shown) lines.push(`  ${p.name.padEnd(22)} ${p.type.padEnd(8)} ${p.desc || ""}`);
  if (wallet) lines.push(`  (${wallet.name} is your wallet: PHANTASMA_WIF in .env)`);
  lines.push(`Network: ${NETWORK} (set NETWORK=mainnet to use mainnet)`);
  if (spec.docs) lines.push(`Docs: ${spec.docs}`);
  return lines.join("\n");
}

// Numbers are raw integer units (no decimals): 1 SOUL = 100000000 (8 decimals),
// 1 KCAL = 10000000000 (10 decimals). They are passed as BigInt so large raw
// amounts keep every digit.
function convert(p, raw) {
  if (p.type === "number") {
    if (!/^-?\d+$/.test(raw)) throw new Error(`${p.name} must be a whole number in raw units, got "${raw}"`);
    return BigInt(raw);
  }
  if (p.type === "address") {
    if (!/^[PS][1-9A-HJ-NP-Za-km-z]{40,50}$/.test(raw)) throw new Error(`${p.name} must be a Phantasma address (P... or S...), got "${raw}"`);
    return raw;
  }
  return raw; // string
}

function buildArgs(spec, wallet, walletAddress) {
  const given = process.argv.slice(2);
  if (given.includes("-h") || given.includes("--help")) {
    console.log(usage(spec, wallet));
    process.exit(0);
  }
  const needed = spec.params.filter((p) => !(wallet && p === wallet));
  if (given.length !== needed.length) {
    console.error(`Expected ${needed.length} argument(s), got ${given.length}.\n\n${usage(spec, wallet)}`);
    process.exit(1);
  }
  let i = 0;
  return spec.params.map((p) => (wallet && p === wallet ? walletAddress : convert(p, given[i++])));
}

/* ---------------------------------------------------------------- decode */

function decodeOne(hex) {
  if (typeof hex !== "string" || hex === "") return hex;
  const o = VMObject.FromBytes(Base16.decodeUint8Array(hex));
  switch (o.Type) {
    case 3: return o.AsNumber().toString(); // Number (BigInteger)
    case 4: return o.AsString(); // String
    case 5: return o.AsTimestamp().toString(); // Timestamp
    case 6: return o.AsBool(); // Bool
    case 8: // Object: usually an Address
      if (o.Data && o.Data.Text) return o.Data.Text;
      try { return o.AsString(); } catch { return hex; }
    default:
      try { return o.AsString(); } catch { return hex; }
  }
}

/* ------------------------------------------------------------------ read */

/**
 * Read a view method. Free: no wallet, no gas, nothing is sent.
 * A method that yields a list (a "number*" or "string*" return) comes back
 * as several results; each one is decoded and printed.
 */
async function read(spec) {
  const args = buildArgs(spec, null, null);
  const sb = new ScriptBuilder();
  sb.BeginScript();
  sb.CallContract(spec.contract, spec.method, args);
  const script = sb.EndScript();

  const res = await api.invokeRawScript(CHAIN, script);
  if (res && res.error) throw new Error(res.error);
  const hexes = Array.isArray(res.results) && res.results.length ? res.results : res.result ? [res.result] : [];
  const values = hexes.map(decodeOne);

  console.log(`${spec.contract}.${spec.method}(${args.map(String).join(", ")}) on ${NETWORK} (${NET.rpc})`);
  if (values.length <= 1) console.log(values.length ? values[0] : "(no value)");
  else values.forEach((v, n) => console.log(`[${n}] ${v}`));
  return values;
}

/* ----------------------------------------------------------------- write */

async function kcalBalance(address) {
  try {
    const acct = await api.getAccount(address);
    const b = (acct.balances || []).find((x) => x.symbol === "KCAL");
    return b ? BigInt(b.amount) : 0n;
  } catch {
    return null; // unknown: let the node decide
  }
}

const kcal = (raw) => `${raw / 10000000000n}.${(raw % 10000000000n).toString().padStart(10, "0").slice(0, 4)}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Sign and send a write method with the wallet in PHANTASMA_WIF.
 * The parameter that must be signed by the caller (from, lender, borrower,
 * ...) is filled in with your wallet address.
 */
async function send(spec) {
  const WIF = process.env.PHANTASMA_WIF;
  if (!WIF) {
    console.error(`PHANTASMA_WIF is not set. Put your wallet key in .env (see .env.example).\n\n${usage(spec, spec.params[spec.walletIndex])}`);
    process.exit(1);
  }
  const keys = PhantasmaKeys.fromWIF(WIF);
  const me = keys.Address.Text;
  const wallet = spec.walletIndex >= 0 ? spec.params[spec.walletIndex] : null;
  const args = buildArgs(spec, wallet, me);

  // Fit the gas ceiling to the wallet: the node refuses a transaction whose
  // price × limit is more KCAL than the payer holds.
  let limit = Number(process.env.GAS_LIMIT || (spec.heavy ? HEAVY_GAS_LIMIT : DEFAULT_GAS_LIMIT));
  const bal = await kcalBalance(me);
  if (bal !== null) {
    const usable = (bal * 9n) / 10n;
    const need = BigInt(GAS_PRICE) * BigInt(limit);
    if (usable < need) {
      if (spec.heavy) throw new Error(`This call needs up to ${kcal(need)} KCAL available for gas (unused gas is refunded); ${me} holds ${kcal(bal)} KCAL.`);
      const fitted = Number(usable / BigInt(GAS_PRICE));
      if (fitted < 10000) throw new Error(`Not enough KCAL for gas: ${me} holds ${kcal(bal)} KCAL.`);
      limit = fitted;
    }
  }

  const sb = new ScriptBuilder();
  sb.AllowGas(me, Address.Null, GAS_PRICE, limit);
  sb.CallContract(spec.contract, spec.method, args);
  sb.SpendGas(me);
  const script = sb.EndScript();

  const expiration = new Date(Date.now() + 5 * 60 * 1000);
  const tx = new Transaction(NET.nexus, CHAIN, script, expiration, PAYLOAD);
  tx.signWithKeys(keys);

  console.log(`${spec.contract}.${spec.method}(${args.map(String).join(", ")})`);
  console.log(`network ${NETWORK} (${NET.rpc}), wallet ${me}, gas ceiling ${kcal(BigInt(GAS_PRICE) * BigInt(limit))} KCAL`);
  const hash = await api.sendRawTransaction(Base16.encodeUint8Array(tx.ToByteAray(true)));
  if (typeof hash !== "string" || !/^[0-9A-Fa-f]{64}$/.test(hash)) throw new Error(`The node refused the transaction: ${JSON.stringify(hash)}`);
  console.log(`tx ${hash}\n${NET.explorer}${hash}`);

  for (let i = 0; i < 40; i++) {
    await sleep(2500);
    let r;
    try { r = await api.getTransaction(hash); } catch { continue; }
    if (!r || !r.state || !["Halt", "Fault", "Break"].includes(r.state)) continue;
    const gas = (r.events || []).find((e) => e.kind === "GasPayment");
    if (r.state === "Halt") {
      console.log(`SUCCESS (Halt)${r.fee ? `, fee ${kcal(BigInt(r.fee))} KCAL` : ""}`);
    } else {
      console.log(`FAILED (${r.state}): ${r.debugComment || "no reason given"}`);
      process.exitCode = 1;
    }
    if (gas && process.env.VERBOSE) console.log(JSON.stringify(r.events, null, 2));
    return r;
  }
  console.log("Not confirmed after 100 s. Check the explorer link above.");
  process.exitCode = 1;
  return null;
}

function run(fn, spec) {
  fn(spec).catch((err) => {
    console.error(`ERROR: ${err && err.message ? err.message : err}`);
    process.exit(1);
  });
}

module.exports = { read: (spec) => run(read, spec), send: (spec) => run(send, spec), NETWORK, NET, api };
