#!/usr/bin/env node
"use strict";

/**
 * testAddLiquidity.js
 *
 * Diagnostic + test script for saturnliquidity.addLiquidity (3_LiquidityManager.tomb).
 * - Reads pool state via read-only invokeRawScript
 * - Computes required tokenB from the current pool ratio
 * - Checks wallet balances
 * - Sends the addLiquidity transaction and prints the result/events
 *
 * Env (.env):
 *   PHANTASMA_WIF   = <wif key>           (required)
 *   POOL_ID         = <number>            (default: 2)
 *   AMOUNT_A        = <raw int string>    (default: 10000000000000)
 *   SLIPPAGE_BPS    = <basis points>      (default: 500 = 5%)
 *   DRY_RUN         = 1 to skip broadcast (default: 0)
 *   RPC_URL         = override rpc        (default: devnet)
 *   NEXUS           = override nexus      (default: testnet)
 */

const {
  PhantasmaKeys,
  ScriptBuilder,
  Transaction,
  PhantasmaAPI,
  Address,
  Base16,
  VMObject,
} = require("phantasma-sdk-ts");
const dotenv = require("dotenv");

dotenv.config();

// ─── Config ───────────────────────────────────────────────────────────────────
const RPC_URL     = process.env.RPC_URL || "https://devnet.phantasma.info/rpc";
const NEXUS       = process.env.NEXUS   || "testnet";
const CHAIN       = "main";
const POOL_ID     = Number(process.env.POOL_ID || "2");
const AMOUNT_A    = BigInt(process.env.AMOUNT_A || "10000000000000");
const SLIPPAGE_BPS = BigInt(process.env.SLIPPAGE_BPS || "500"); // 5%
const DRY_RUN     = process.env.DRY_RUN === "1";

const GAS_PRICE = 100000;
const GAS_LIMIT = 75000;
const PAYLOAD   = Base16.encode("DEXv4-addLiquidity-test");

// ─── Wallet ───────────────────────────────────────────────────────────────────
const WIF = process.env.PHANTASMA_WIF;
if (!WIF) {
  console.error("ERROR: PHANTASMA_WIF not set in .env");
  process.exit(1);
}
const keys = PhantasmaKeys.fromWIF(WIF);
const rpc  = new PhantasmaAPI(RPC_URL, undefined, NEXUS);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ─── Helpers ──────────────────────────────────────────────────────────────────
function decodeVM(hex) {
  if (!hex) return null;
  const bytes = Base16.decodeUint8Array(hex);
  return VMObject.FromBytes(bytes);
}

async function rawInvoke(contract, method, args = []) {
  const sb = new ScriptBuilder();
  sb.CallContract(contract, method, args);
  const script = sb.EndScript();
  const res = await rpc.invokeRawScript(CHAIN, script);
  if (!res) throw new Error(`No response from ${contract}.${method}`);
  const hex = (res.results && res.results[0]) || res.result;
  if (!hex) {
    throw new Error(
      `No result from ${contract}.${method}. Full response: ${JSON.stringify(res)}`,
    );
  }
  return decodeVM(hex);
}

async function viewBig(contract, method, args = []) {
  const vm = await rawInvoke(contract, method, args);
  // Pull BigInt via string to avoid Number precision loss
  try {
    return BigInt(vm.Data.toString());
  } catch (_) {
    return BigInt(vm.AsNumber());
  }
}

async function viewString(contract, method, args = []) {
  const vm = await rawInvoke(contract, method, args);
  return vm.AsString();
}

// The SDK's VMObject.UnserializeData Address branch is buggy because
// PBinaryReader.readByteArray returns a hex STRING (not Uint8Array), so the
// `bytes.length == 35` check compares hex char count against a byte count and
// never matches. For address-returning view fns, we decode manually:
// the hex payload is `[varint len=0x22=34][34 bytes of address]`; the 34
// bytes are `[kind=1][pubkey=33]` and Address.FromBytes accepts them directly.
async function viewAddress(contract, method, args = []) {
  const vm = await rawInvoke(contract, method, args);
  // Happy path: SDK produced an Address object
  if (vm && vm.Data && vm.Data._bytes && typeof vm.Data.Text !== "undefined") {
    return vm.Data.Text || vm.Data.toString();
  }
  // Fallback: the SDK left us with a hex string in Data
  if (vm && typeof vm.Data === "string") {
    const hex = vm.Data;
    const total = new Uint8Array(hex.length / 2);
    for (let i = 0; i < total.length; i++) {
      total[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    // Strip the leading varint length byte (expected 0x22 = 34)
    const addrBytes =
      total.length === 35 && total[0] === 34 ? total.slice(1) : total;
    return Address.FromBytes(addrBytes).Text;
  }
  return vm ? vm.AsString() : "";
}

function banner(title) {
  console.log("");
  console.log("─".repeat(60));
  console.log(" " + title);
  console.log("─".repeat(60));
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("=".repeat(60));
  console.log("  saturnliquidity.addLiquidity diagnostic");
  console.log("  Wallet  :", keys.Address.toString());
  console.log("  RPC     :", RPC_URL);
  console.log("  Nexus   :", NEXUS);
  console.log("  Pool ID :", POOL_ID);
  console.log("  AmountA :", AMOUNT_A.toString());
  console.log("  Slippage:", SLIPPAGE_BPS.toString(), "bps");
  console.log("  DryRun  :", DRY_RUN);
  console.log("=".repeat(60));

  // ── Pool state ────────────────────────────────────────────────────────────
  banner("Pool state");

  const active = await viewBig("saturnpools", "getPoolActive", [POOL_ID]);
  console.log("active        :", active.toString());
  if (active !== 1n) {
    console.error(">>> FAIL: pool is not active (expected 1, got " + active + ").");
    console.error("    Either poolId does not exist or it was removed.");
    process.exit(2);
  }

  const pawned = await viewBig("saturnpools", "getPoolPawned", [POOL_ID]);
  console.log("pawned        :", pawned.toString());
  if (pawned !== 0n) {
    console.error(">>> FAIL: pool is pawned — cannot modify.");
    process.exit(2);
  }

  const provider = await viewAddress("saturnpools", "getPoolProvider", [POOL_ID]);
  console.log("provider      :", provider);
  if (provider !== keys.Address.toString()) {
    console.warn(
      ">>> WARN: provider does not match signer.\n    provider :",
      provider,
      "\n    signer   :",
      keys.Address.toString(),
    );
    console.warn("    addLiquidity will revert with 'Only pool provider can add liquidity'.");
  }

  const tokenA = await viewString("saturnpools", "getPoolTokenA", [POOL_ID]);
  const tokenB = await viewString("saturnpools", "getPoolTokenB", [POOL_ID]);
  const resA   = await viewBig("saturnpools", "getPoolReserveA", [POOL_ID]);
  const resB   = await viewBig("saturnpools", "getPoolReserveB", [POOL_ID]);
  const feeP10k = await viewBig("saturnpools", "getPoolFee", [POOL_ID]);
  console.log("tokenA        :", tokenA);
  console.log("tokenB        :", tokenB);
  console.log("reserveA (sc) :", resA.toString());
  console.log("reserveB (sc) :", resB.toString());
  console.log("fee (per 10k) :", feeP10k.toString());

  if (resA === 0n || resB === 0n) {
    console.error(">>> FAIL: one of the reserves is zero.");
    process.exit(2);
  }

  // ── Admin config ──────────────────────────────────────────────────────────
  banner("Admin config");
  const targetDec   = await viewBig("saturnadmin", "getTargetDecimals", []);
  const minAddLiq   = await viewBig("saturnadmin", "getMinScaledAddLiqUnits", []);
  const absMinRaw   = await viewBig("saturnadmin", "getAbsoluteMinRaw", []);
  const soulFee     = await viewBig("saturnadmin", "getSOULfeeAddLiquidity", []);
  console.log("targetDecimals       :", targetDec.toString());
  console.log("minScaledAddLiqUnits :", minAddLiq.toString());
  console.log("absoluteMinRaw       :", absMinRaw.toString());
  console.log("SOULfeeAddLiquidity  :", soulFee.toString());

  // ── Scale factors (derive from scaleUp(1, symbol)) ────────────────────────
  banner("Scale factors");
  const scaleA = await viewBig("saturnpools", "scaleUp", [1, tokenA]);
  const scaleB = await viewBig("saturnpools", "scaleUp", [1, tokenB]);
  console.log("scale(" + tokenA + ") :", scaleA.toString());
  console.log("scale(" + tokenB + ") :", scaleB.toString());

  // ── Min raw A gate ────────────────────────────────────────────────────────
  const minRawA = await viewBig("saturnpools", "getMinRawForToken", [tokenA, minAddLiq]);
  console.log("minRawA              :", minRawA.toString());
  if (AMOUNT_A < minRawA) {
    console.error(">>> FAIL: amountA (" + AMOUNT_A + ") < minRawA (" + minRawA + ").");
    process.exit(2);
  }

  // ── Required B calculation (mirrors contract) ─────────────────────────────
  banner("Ratio calculation (BigInt mirror of contract)");
  const scaledAddA     = AMOUNT_A * scaleA;
  const scaledRequiredB = (scaledAddA * resB) / resA; // integer div
  const realRequiredB  = scaledRequiredB / scaleB;    // integer div (scaleDown)
  console.log("scaledAddA      :", scaledAddA.toString());
  console.log("scaledRequiredB :", scaledRequiredB.toString());
  console.log("realRequiredB   :", realRequiredB.toString());

  if (realRequiredB === 0n) {
    console.error(
      ">>> FAIL: realRequiredB rounds to zero. amountA is too small vs. pool ratio.",
    );
    process.exit(2);
  }

  const maxAmountTokenB = (realRequiredB * (10000n + SLIPPAGE_BPS)) / 10000n;
  console.log("maxAmountTokenB :", maxAmountTokenB.toString(), "(with slippage)");

  // ── Wallet balance checks ─────────────────────────────────────────────────
  banner("Wallet balances");
  let acct;
  try {
    acct = await rpc.getAccount(keys.Address.toString());
  } catch (e) {
    console.warn("getAccount failed:", e.message || e);
  }
  const balanceOf = (sym) => {
    if (!acct || !acct.balances) return null;
    const b = acct.balances.find((x) => x.symbol === sym);
    return b ? BigInt(b.amount) : 0n;
  };
  const balA    = balanceOf(tokenA);
  const balB    = balanceOf(tokenB);
  const balSOUL = balanceOf("SOUL");
  console.log(tokenA + ":", balA === null ? "?" : balA.toString());
  console.log(tokenB + ":", balB === null ? "?" : balB.toString());
  console.log("SOUL  :", balSOUL === null ? "?" : balSOUL.toString());

  let proceed = true;
  if (balA !== null && balA < AMOUNT_A) {
    console.error(">>> FAIL: insufficient " + tokenA + " balance.");
    proceed = false;
  }
  if (balB !== null && balB < realRequiredB) {
    console.error(">>> FAIL: insufficient " + tokenB + " balance (need " + realRequiredB + ").");
    proceed = false;
  }
  if (balSOUL !== null && balSOUL < soulFee) {
    console.error(">>> FAIL: insufficient SOUL for storage fee (need " + soulFee + ").");
    proceed = false;
  }

  if (!proceed) {
    console.error("Pre-flight failed. Aborting before sending tx.");
    process.exit(3);
  }

  // ── Build transaction ─────────────────────────────────────────────────────
  banner("Transaction");

  // The contract's arg list:
  //   addLiquidity(from, poolId, amountTokenA, maxAmountTokenB)
  // phantasma-sdk-ts EmitLoad handles JS number via BigInt emit.
  // Use Number() for the args since AMOUNT_A fits in 2^53 (< Number.MAX_SAFE_INTEGER).
  if (AMOUNT_A > BigInt(Number.MAX_SAFE_INTEGER)) {
    console.warn(
      "AMOUNT_A exceeds Number.MAX_SAFE_INTEGER — this script passes it as JS number; precision loss possible.",
    );
  }

  const args = [
    keys.Address,
    POOL_ID,
    Number(AMOUNT_A),
    Number(maxAmountTokenB),
  ];
  console.log("args:", args.map(String));

  if (DRY_RUN) {
    console.log("DRY_RUN=1 — not broadcasting.");
    return;
  }

  const sb = new ScriptBuilder();
  sb.AllowGas(keys.Address, Address.Null, GAS_PRICE, GAS_LIMIT);
  sb.CallContract("saturnliquidity", "addLiquidity", args);
  sb.SpendGas(keys.Address);
  const script = sb.EndScript();

  const expiration = new Date(Date.now() + 5 * 60 * 1000);
  const tx = new Transaction(NEXUS, CHAIN, script, expiration, PAYLOAD);
  tx.signWithKeys(keys);
  const txHex = Base16.encodeUint8Array(tx.ToByteAray(true));

  console.log("Broadcasting...");
  const txHash = await rpc.sendRawTransaction(txHex);
  console.log("tx hash :", txHash);
  console.log("explorer: https://test-explorer.phantasma.info/tx/" + txHash);

  // Poll getTransaction until it reports a terminal state (Halt/Fault) or we time out.
  // Phantasma returns ExecutionState.Break (=1, "Break") while the tx is still
  // pending (before the block that contains it has been produced), so a single
  // 6-second wait can misreport "Break" when the tx is actually in-flight.
  const TERMINAL = new Set(["Halt", "Fault"]);
  const POLL_INTERVAL_MS = 3000;
  const POLL_TIMEOUT_MS = 90000;
  const started = Date.now();
  let result = null;
  let lastState = null;
  process.stdout.write("\nPolling for confirmation");
  while (Date.now() - started < POLL_TIMEOUT_MS) {
    await sleep(POLL_INTERVAL_MS);
    try {
      result = await rpc.getTransaction(txHash);
    } catch (e) {
      process.stdout.write("?");
      continue;
    }
    const st = result && result.state;
    if (st !== lastState) {
      process.stdout.write("\n  state = " + st);
      lastState = st;
    } else {
      process.stdout.write(".");
    }
    if (st && TERMINAL.has(st)) break;
  }
  console.log("");

  console.log("\nfinal state :", result && result.state);
  if (result && Array.isArray(result.events) && result.events.length > 0) {
    console.log("events:");
    for (const e of result.events) {
      const data = typeof e.data === "string" ? e.data : JSON.stringify(e.data);
      console.log("  -", e.kind, e.contract || "", data);
    }
  } else {
    console.log("events: (none returned)");
  }
  if (result && result.debugComment) {
    console.log("debugComment:", result.debugComment);
  }

  if (!result || result.state !== "Halt") {
    console.log("\nFULL RESULT:", JSON.stringify(result, null, 2));
    console.error(
      "\nTX did not halt cleanly." +
      "\n  - state=Fault  -> Runtime.expect failed; check events for the message" +
      "\n  - state=Break  -> still pending after " + (POLL_TIMEOUT_MS / 1000) +
      "s, or VM aborted (out of gas / invalid opcode); inspect on the explorer" +
      "\n  - no result    -> RPC couldn't find the tx; check the hash on the explorer",
    );
    process.exit(4);
  }
  console.log("\nSUCCESS");
}

main().catch((err) => {
  console.error("FATAL:", err && err.stack ? err.stack : err);
  process.exit(1);
});
