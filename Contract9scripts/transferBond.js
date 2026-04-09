#!/usr/bin/env node
"use strict";

/**
 * transferBond.js
 *
 * Calls saturnbonds.transferBond() (9_BondMarket.tomb) as a signed
 * transaction. Fill in the placeholder argument values below before running.
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
const RPC_URL   = "https://devnet.phantasma.info/rpc";
const NEXUS     = "testnet";
const CHAIN     = "main";
const CONTRACT  = "saturnbonds";
const METHOD    = "transferBond";

const GAS_PRICE = 100000;
const GAS_LIMIT = 75000;
const PAYLOAD   = Base16.encode("DEXv4-transferBond");

// ─── Wallet ───────────────────────────────────────────────────────────────────
const WIF = process.env.PHANTASMA_WIF;
if (!WIF) {
  console.error("ERROR: PHANTASMA_WIF not set in .env");
  process.exit(1);
}
const keys = PhantasmaKeys.fromWIF(WIF);
const rpc  = new PhantasmaAPI(RPC_URL, undefined, NEXUS);

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("=".repeat(60));
  console.log("  saturnbonds.transferBond");
  console.log("  Wallet:", keys.Address);
  console.log("=".repeat(60));

  // Build the argument list for the contract call.
  // Edit the placeholders below to suit your call.
  const args = [
    keys.Address,  // from: address
    Address.FromText("P2K...REPLACE_ME"),  // to: address
    0  /* REPLACE: amount/id */,  // bondId: number
  ];

  const sb = new ScriptBuilder();
  sb.AllowGas(keys.Address, Address.Null, GAS_PRICE, GAS_LIMIT);
  sb.CallContract(CONTRACT, METHOD, args);
  sb.SpendGas(keys.Address);
  const script = sb.EndScript();

  const expiration = new Date(Date.now() + 5 * 60 * 1000);
  const tx = new Transaction(NEXUS, CHAIN, script, expiration, PAYLOAD);
  tx.signWithKeys(keys);

  const txHex = Base16.encodeUint8Array(tx.ToByteAray(true));
  console.log("Broadcasting...");
  const txHash = await rpc.sendRawTransaction(txHex);
  console.log("TX hash :", txHash);
  console.log("Explorer: https://test-explorer.phantasma.info/tx/" + txHash);

  console.log("\nWaiting 6s for confirmation...");
  await sleep(6000);
  const result = await rpc.getTransaction(txHash);
  console.log("\nResult:", JSON.stringify(result, null, 2));
  console.log(result?.state === "Halt" ? "\nSUCCESS" : "\nMay have failed — check above");
}

main().catch(err => { console.error("FATAL:", err); process.exit(1); });
