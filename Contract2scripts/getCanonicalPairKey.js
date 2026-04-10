#!/usr/bin/env node
"use strict";

/**
 * getCanonicalPairKey.js
 *
 * Read-only call to saturnpools.getCanonicalPairKey() (2_PoolRegistry.tomb).
 * Returns: string
 *
 * No witness / signing required.
 */

const { PhantasmaAPI, ScriptBuilder, Decoder, Address } = require("phantasma-sdk-ts");

const RPC_URL  = "https://devnet.phantasma.info/rpc";
const NEXUS    = "testnet";
const CHAIN    = "main";
const CONTRACT = "saturnpools";

const rpc = new PhantasmaAPI(RPC_URL, undefined, NEXUS);

function tryConvertAddress(hex) {
  if (typeof hex !== "string" || hex.length !== 70) return null;
  const lenByte = parseInt(hex.substring(0, 2), 16);
  if (lenByte !== 34) return null;
  const addrHex = hex.substring(2);
  const kindByte = parseInt(addrHex.substring(0, 2), 16);
  if (kindByte < 1 || kindByte > 3) return null;
  try {
    const bytes = Uint8Array.from(Buffer.from(addrHex, "hex"));
    return Address.FromBytes(bytes).Text;
  } catch { return null; }
}

function normalizeDecoded(value) {
  if (value == null) return value;
  if (typeof value === "string") {
    const addr = tryConvertAddress(value);
    if (addr) return addr;
    return value;
  }
  if (value.Text) return value.Text;
  if (typeof value.toString === "function") return value.toString();
  return value;
}

function decodeResult(res) {
  if (!res) return null;
  if (Array.isArray(res.results)) {
    return res.results.map((hex) => {
      if (!hex || typeof hex !== "string") return hex;
      try { return normalizeDecoded(new Decoder(hex).readVmObject()); } catch { return hex; }
    });
  }
  if (res.result) {
    try { return normalizeDecoded(new Decoder(res.result).readVmObject()); } catch { return res.result; }
  }
  return res;
}

async function main() {
  console.log("=".repeat(60));
  console.log("  saturnpools.getCanonicalPairKey");
  console.log("=".repeat(60));

  const args = [
  "REPLACE_symbolA",  // symbolA: string
  "REPLACE_symbolB",  // symbolB: string
];

  const sb = new ScriptBuilder();
  sb.BeginScript();
  sb.CallContract(CONTRACT, "getCanonicalPairKey", args);
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
