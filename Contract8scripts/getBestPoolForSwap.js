#!/usr/bin/env node
"use strict";

/**
 * getBestPoolForSwap.js
 *
 * Read-only call to saturnrouter.getBestPoolForSwap() (8_RouterViews.tomb).
 * Returns: number
 *
 * No witness / signing required.
 */

const { PhantasmaAPI, ScriptBuilder, Decoder } = require("phantasma-sdk-ts");

const RPC_URL  = "https://devnet.phantasma.info/rpc";
const NEXUS    = "testnet";
const CHAIN    = "main";
const CONTRACT = "saturnrouter";

const rpc = new PhantasmaAPI(RPC_URL, null, NEXUS);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function looksLikeHex(str) {
  return typeof str === "string" && /^[0-9a-fA-F]+$/.test(str) && str.length % 2 === 0;
}

function decodeVmValue(hex) {
  const decoder = new Decoder(hex);
  return decoder.readVmObject();
}

function normalizeDecoded(value) {
  if (value == null) return value;
  if (typeof value === "string") return value;
  if (value.Text) return value.Text;
  if (typeof value.toString === "function") return value.toString();
  return value;
}

function decodeNestedVmResult(hex) {
  let value = decodeVmValue(hex);
  value = normalizeDecoded(value);

  // if first decode returns another hex blob, decode again
  if (looksLikeHex(value)) {
    let inner = decodeVmValue(value);
    inner = normalizeDecoded(inner);
    return inner;
  }

  return value;
}

async function main() {
  console.log("=".repeat(60));
  console.log("  saturnrouter.getBestPoolForSwap");
  console.log("=".repeat(60));

  const args = [
  "REPLACE_tokenIn",  // tokenIn: string
  "REPLACE_tokenOut",  // tokenOut: string
  0  /* REPLACE: id */,  // amountIn: number
];

  const sb = new ScriptBuilder();
  const script = sb
    .BeginScript()
    .CallContract(CONTRACT, "getBestPoolForSwap", args)
    .EndScript();

  const res = await rpc.invokeRawScript(CHAIN, script);
  if (!res || res.error) {
    console.error("ERROR:", res?.error ?? "empty response");
    process.exit(1);
  }

  const decoded = decodeNestedVmResult(res.result);
  console.log("decoded:", JSON.stringify(decoded, null, 2));
  console.log("raw    :", JSON.stringify(res));
}

main().catch(err => { console.error("FATAL:", err); process.exit(1); });
