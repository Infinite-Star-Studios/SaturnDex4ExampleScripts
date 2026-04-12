#!/usr/bin/env node
"use strict";

/**
 * getPoolFeesStored.js
 *
 * Read-only helper for pool fee state.
 * - saturnpools.getPoolProvider(poolId)
 * - saturnpools.getPoolTokenA(poolId)
 * - saturnpools.getPoolTokenB(poolId)
 * - saturnfees.getFeeRedirectActive(poolId)
 * - saturnfees.getProviderClaimable(poolId, token)
 * - saturnpools.scaleDown(claimableScaled, token)
 */

const { PhantasmaAPI, ScriptBuilder, Decoder, Address } = require("phantasma-sdk-ts");

const RPC_URL = "https://devnet.phantasma.info/rpc";
const NEXUS = "testnet";
const CHAIN = "main";

const POOLS_CONTRACT = "saturnpools";
const FEES_CONTRACT = "saturnfees";

const POOL_ID = 2; // your pool

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
  } catch {
    return null;
  }
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

async function invoke(contract, method, args) {
  const sb = new ScriptBuilder();
  sb.BeginScript();
  sb.CallContract(contract, method, args);
  const script = sb.EndScript();

  const res = await rpc.invokeRawScript(CHAIN, script);
  if (res && res.error) {
    throw new Error(`${contract}.${method} error: ${res.error}`);
  }

  const hex = (res?.results && res.results[0]) || res?.result;
  if (!hex) return null;

  try {
    return normalizeDecoded(new Decoder(hex).readVmObject());
  } catch {
    return hex;
  }
}

async function main() {
  console.log("=".repeat(70));
  console.log("Pool fee storage inspector");
  console.log("Pool ID:", POOL_ID);
  console.log("=".repeat(70));

  const provider = await invoke(POOLS_CONTRACT, "getPoolProvider", [POOL_ID]);
  const tokenA = await invoke(POOLS_CONTRACT, "getPoolTokenA", [POOL_ID]);
  const tokenB = await invoke(POOLS_CONTRACT, "getPoolTokenB", [POOL_ID]);
  const redirectActive = await invoke(FEES_CONTRACT, "getFeeRedirectActive", [POOL_ID]);

  const claimableA_scaled = await invoke(FEES_CONTRACT, "getProviderClaimable", [POOL_ID, tokenA]);
  const claimableB_scaled = await invoke(FEES_CONTRACT, "getProviderClaimable", [POOL_ID, tokenB]);

  const claimableA_real = await invoke(POOLS_CONTRACT, "scaleDown", [Number(claimableA_scaled || 0), tokenA]);
  const claimableB_real = await invoke(POOLS_CONTRACT, "scaleDown", [Number(claimableB_scaled || 0), tokenB]);

  console.log("provider                :", provider);
  console.log("tokenA                  :", tokenA);
  console.log("tokenB                  :", tokenB);
  console.log("feeRedirectActive       :", redirectActive, redirectActive == 1 ? "(YES)" : "(NO)");
  console.log("---");
  console.log(`claimable ${tokenA} scaled :`, claimableA_scaled);
  console.log(`claimable ${tokenA} real   :`, claimableA_real);
  console.log(`claimable ${tokenB} scaled :`, claimableB_scaled);
  console.log(`claimable ${tokenB} real   :`, claimableB_real);

  if (redirectActive == 1) {
    console.log("\nNOTE: Redirect is active. Provider cannot claim directly right now.");
  }
}

main().catch((err) => {
  console.error("FATAL:", err.message || err);
  process.exit(1);
});