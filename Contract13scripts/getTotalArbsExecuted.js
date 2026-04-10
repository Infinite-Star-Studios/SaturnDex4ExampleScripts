#!/usr/bin/env node
"use strict";

/**
 * getTotalArbsExecuted.js
 *
 * Read-only call to saturnarb.getTotalArbsExecuted() (13_FlashArbitrage.tomb).
 * Returns: number
 *
 * No witness / signing required.
 */

const { PhantasmaAPI, ScriptBuilder, Decoder } = require("phantasma-sdk-ts");

const RPC_URL  = "https://devnet.phantasma.info/rpc";
const NEXUS    = "testnet";
const CHAIN    = "main";
const CONTRACT = "saturnarb";

const rpc = new PhantasmaAPI(RPC_URL, undefined, NEXUS);

function decodeResult(res) {
  if (!res) return null;
  if (Array.isArray(res.results)) {
    return res.results.map((hex) => {
      if (!hex || typeof hex !== "string") return hex;
      try { return new Decoder(hex).readVmObject(); } catch { return hex; }
    });
  }
  if (res.result) {
    try { return new Decoder(res.result).readVmObject(); } catch { return res.result; }
  }
  return res;
}

async function main() {
  console.log("=".repeat(60));
  console.log("  saturnarb.getTotalArbsExecuted");
  console.log("=".repeat(60));

  const args = [];

  const sb = new ScriptBuilder();
  sb.BeginScript();
  sb.CallContract(CONTRACT, "getTotalArbsExecuted", args);
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
