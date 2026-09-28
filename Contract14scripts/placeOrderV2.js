#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.placeOrderV2 — write (signed transaction, needs PHANTASMA_WIF)
 * placeOrderV2(from: address, poolId: number, tokenIn: string, tokenOut: string, amountIn: number, minAmountOut: number, maxAmountOut: number, bountyPer10k: number, expiryTime: number)
 *
 * Deposit tokenIn and create a limit order against one specific pool. The swap
 * fires when an agent calls executeOrder and the pool's current output for
 * amountIn is at least minAmountOut (the constant-product slippage check
 * enforces this). maxAmountOut is an optional ceiling: when non-zero, an
 * execution that would deliver more than it is refused, which stops an order
 * from being filled at an absurd price through a manipulated or nearly empty
 * pool. Both tokens must belong to the pool's pair. amountIn must be at least
 * saturnrouter.getMinRawForSwap(tokenIn), the swap engine's minimum, or the
 * order could never execute. bountyPer10k must be between 0 and 500.
 *
 * Usage: node Contract14scripts/placeOrderV2.js <poolId> <tokenIn> <tokenOut> <amountIn> <minAmountOut> <maxAmountOut> <bountyPer10k> <expiryTime>
 *   poolId (number): Pool the order executes against (must be active).
 *   tokenIn (string): Token deposited / sold.
 *   tokenOut (string): Token wanted.
 *   amountIn (number): Raw amount of tokenIn to escrow.
 *   minAmountOut (number): Minimum raw tokenOut you accept (the limit
 *   price); must be > 0.
 *   maxAmountOut (number): Optional ceiling on the fill; 0 = no ceiling,
 *   otherwise must exceed minAmountOut.
 *   bountyPer10k (number): Executor reward: this share (per 10,000) of the
 *   output above minAmountOut, 0..500 (5%); a negative value is refused.
 *   Paid in tokenOut.
 *   expiryTime (number): Unix time after which the order can be expired; 0 =
 *   never.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-placeOrderV2
 */

const { send } = require("../common");

send({
  file: "Contract14scripts/placeOrderV2.js",
  contract: "saturnlimit",
  method: "placeOrderV2",
  params: [
    { name: "from", type: "address", desc: "Order owner (witness)." },
    { name: "poolId", type: "number", desc: "Pool the order executes against (must be active)." },
    { name: "tokenIn", type: "string", desc: "Token deposited / sold." },
    { name: "tokenOut", type: "string", desc: "Token wanted." },
    { name: "amountIn", type: "number", desc: "Raw amount of tokenIn to escrow." },
    { name: "minAmountOut", type: "number", desc: "Minimum raw tokenOut you accept (the limit price); must be > 0." },
    { name: "maxAmountOut", type: "number", desc: "Optional ceiling on the fill; 0 = no ceiling, otherwise must exceed minAmountOut." },
    { name: "bountyPer10k", type: "number", desc: "Executor reward: this share (per 10,000) of the output above minAmountOut, 0..500 (5%); a negative value is refused. Paid in tokenOut." },
    { name: "expiryTime", type: "number", desc: "Unix time after which the order can be expired; 0 = never." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlimit-placeOrderV2",
});
