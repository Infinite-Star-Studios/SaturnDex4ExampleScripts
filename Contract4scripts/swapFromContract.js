#!/usr/bin/env node
"use strict";

/**
 * swapFromContract.js
 *
 * Read-only call to saturnswap.swapFromContract() (4_SwapEngine.tomb).
 * Returns: number
 *
 * No witness / signing required.
 */

const { PhantasmaAPI, ScriptBuilder, decodeVMObject, Address } = require("phantasma-sdk-ts");

const RPC_URL  = "https://devnet.phantasma.info/rpc";
const NEXUS    = "testnet";
const CHAIN    = "main";
const CONTRACT = "saturnswap";

const rpc = new PhantasmaAPI(RPC_URL, undefined, NEXUS);

function decodeOne(b64) {
  if (!b64 || typeof b64 !== "string") return b64;
  try {
    const hex = Buffer.from(b64, "base64").toString("hex");
    return decodeVMObject(hex);
  } catch {
    return b64;
  }
}

function decodeResult(res) {
  if (!res) return null;
  if (Array.isArray(res.results)) return res.results.map(decodeOne);
  if (res.result) return decodeOne(res.result);
  return res;
}

async function main() {
  console.log("=".repeat(60));
  console.log("  saturnswap.swapFromContract");
  console.log("=".repeat(60));

  const args = [
  0  /* REPLACE: id */,  // poolId: number
  0  /* REPLACE: id */,  // amountIn: number
  "REPLACE_tokenIn",  // tokenIn: string
  "REPLACE_tokenOut",  // tokenOut: string
  0  /* REPLACE: id */,  // minAmountOut: number
  Address.FromText("P2K...REPLACE_ME"),  // recipient: address
];

  const sb = new ScriptBuilder();
  sb.BeginScript();
  sb.CallContract(CONTRACT, "swapFromContract", args);
  const script = sb.EndScript();

  const res = await rpc.invokeRawScript(CHAIN, script);
  if (res && res.error) {
    console.error("ERROR:", res.error);
    process.exit(1);
  }
  console.log("decoded:", JSON.stringify(decodeResult(res), null, 2));
  console.log("raw    :", JSON.stringify(res));
}

main().catch(err => { console.error("FATAL:", err); process.exit(1); });
