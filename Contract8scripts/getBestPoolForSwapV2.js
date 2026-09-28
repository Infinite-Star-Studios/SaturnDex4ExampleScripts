#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getBestPoolForSwapV2 — read (free, no wallet)
 * getBestPoolForSwapV2(tokenIn: string, tokenOut: string, amountIn: number, maxPools: number): number
 *
 * Scans up to maxPools pools registered for the pair (in registration order)
 * and returns the poolId that would give the highest net output for amountIn
 * after that pool's fee. Inactive pools and pools with empty reserves score 0
 * and are skipped. This is the first call your swap flow should make — pass
 * the result into SaturnSwap.swap(). It returns the pool id only, not the
 * output: scoring uses the swap engine's math in 8-decimal scaled units, out =
 * (in − in × fee / 10000) × reserveOut / (reserveIn + in − in × fee / 10000),
 * so compute the amount yourself the same way. maxPools bounds the gas of the
 * scan; pass getPoolCountForPair() to consider every pool (hard cap 100).
 *
 * Returns number: Pool ID with the best output, or 0 if no scanned pool can
 * fill the trade.
 *
 * Usage: node Contract8scripts/getBestPoolForSwapV2.js <tokenIn> <tokenOut> <amountIn> <maxPools>
 *   tokenIn (string): Symbol of the token being sold.
 *   tokenOut (string): Symbol of the token being bought.
 *   amountIn (number): Raw amount the user wants to sell.
 *   maxPools (number): How many pools of the pair to score, 1..100.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getBestPoolForSwapV2
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getBestPoolForSwapV2.js",
  contract: "saturnrouter",
  method: "getBestPoolForSwapV2",
  params: [
    { name: "tokenIn", type: "string", desc: "Symbol of the token being sold." },
    { name: "tokenOut", type: "string", desc: "Symbol of the token being bought." },
    { name: "amountIn", type: "number", desc: "Raw amount the user wants to sell." },
    { name: "maxPools", type: "number", desc: "How many pools of the pair to score, 1..100." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getBestPoolForSwapV2",
});
