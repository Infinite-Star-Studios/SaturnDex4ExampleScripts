#!/usr/bin/env node
"use strict";

/**
 * getMarketTotalOver.js
 *
 * Read-only call to saturnpredict.getMarketTotalOver() (15_PredictionMarket.tomb).
 * Returns: number
 *
 * No witness / signing required.
 */

const { PhantasmaAPI, ScriptBuilder, Decoder } = require("phantasma-sdk-ts");

const RPC_URL  = "https://devnet.phantasma.info/rpc";
const NEXUS    = "testnet";
const CHAIN    = "main";
const CONTRACT = "saturnpredict";

const rpc = new PhantasmaAPI(RPC_URL, undefined, NEXUS);

function looksLikeHex(str) {
  return typeof str === "string" && /^[0-9a-fA-F]+$/.test(str) && str.length % 2 === 0;
}

function normalizeDecoded(value) {
  if (value == null) return value;
  if (typeof value === "string") return value;
  if (value.Text) return value.Text;
  if (typeof value.toString === "function") return value.toString();
  return value;
}

function decodeNestedVmResult(hex) {
  let value = new Decoder(hex).readVmObject();
  value = normalizeDecoded(value);
  if (looksLikeHex(value)) {
    let inner = new Decoder(value).readVmObject();
    inner = normalizeDecoded(inner);
    return inner;
  }
  return value;
}

function decodeResult(res) {
  if (!res) return null;
  if (Array.isArray(res.results)) {
    return res.results.map((hex) => {
      if (!hex || typeof hex !== "string") return hex;
      try { return decodeNestedVmResult(hex); } catch { return hex; }
    });
  }
  if (res.result) {
    try { return decodeNestedVmResult(res.result); } catch { return res.result; }
  }
  return res;
}

async function main() {
  console.log("=".repeat(60));
  console.log("  saturnpredict.getMarketTotalOver");
  console.log("=".repeat(60));

  const args = [
  0  /* REPLACE: id */,  // marketId: number
];

  const sb = new ScriptBuilder();
  sb.BeginScript();
  sb.CallContract(CONTRACT, "getMarketTotalOver", args);
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
