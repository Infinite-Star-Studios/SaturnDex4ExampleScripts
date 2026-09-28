#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.swapClPool — write (signed transaction, needs PHANTASMA_WIF)
 * swapClPool(from: address, poolId: number, amountIn: number, tokenIn: string, tokenOut: string, minAmountOut: number): number
 *
 * Executes a swap against a specific CL pool using the xy=k formula. The fee
 * (amountIn * feePer10k / 10000, raw) is deducted from amountIn before the AMM
 * math runs, and is accumulated in the pool for the provider to claim later.
 * Since 4.2.6 a swap whose fee rounds to zero is refused, and the sub-unit
 * remainder of the input that the 8-decimal scaled reserve cannot hold goes to
 * the provider with the fee. The swap reverts if the resulting price would
 * fall outside the pool's declared [priceMin, priceMax] range — this is the
 * core CL invariant. Returns the actual raw output amount delivered to the
 * caller. Use minAmountOut to guard against slippage.
 *
 * Returns number: Raw amount of tokenOut received by the caller after fee
 * deduction.
 *
 * Usage: node Contract18scripts/swapClPool.js <poolId> <amountIn> <tokenIn> <tokenOut> <minAmountOut>
 *   poolId (number): ID of the CL pool to swap through.
 *   amountIn (number): Raw amount of tokenIn to sell. The whole amount is
 *   taken. Must be large enough that amountIn * feePer10k / 10000 >= 1 (at a
 *   0.3% fee: at least 334 raw).
 *   tokenIn (string): Symbol of the input token (must be one of the pool's
 *   pair).
 *   tokenOut (string): Symbol of the output token (the other side of the
 *   pair).
 *   minAmountOut (number): Minimum acceptable raw output; reverts if output
 *   is below this (slippage guard).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-swapClPool
 */

const { send } = require("../common");

send({
  file: "Contract18scripts/swapClPool.js",
  contract: "saturnclpools",
  method: "swapClPool",
  params: [
    { name: "from", type: "address", desc: "Trader; must be the transaction signer." },
    { name: "poolId", type: "number", desc: "ID of the CL pool to swap through." },
    { name: "amountIn", type: "number", desc: "Raw amount of tokenIn to sell. The whole amount is taken. Must be large enough that amountIn * feePer10k / 10000 >= 1 (at a 0.3% fee: at least 334 raw)." },
    { name: "tokenIn", type: "string", desc: "Symbol of the input token (must be one of the pool's pair)." },
    { name: "tokenOut", type: "string", desc: "Symbol of the output token (the other side of the pair)." },
    { name: "minAmountOut", type: "number", desc: "Minimum acceptable raw output; reverts if output is below this (slippage guard)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnclpools-swapClPool",
});
