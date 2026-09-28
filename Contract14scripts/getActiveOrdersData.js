#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getActiveOrdersData — read (free, no wallet)
 * getActiveOrdersData(): string*
 *
 * One pipe-delimited row per active order:
 * orderId|poolId|owner|tokenIn|tokenOut|amountIn|minAmountOut|maxAmountOut|bountyPer10k|expiry|status.
 * Everything an executor needs to evaluate the whole book in one call.
 *
 * Returns string*: Stream of
 * "orderId|poolId|owner|tokenIn|tokenOut|amountIn|minAmountOut|maxAmountOut|bountyPer10k|expiry|status"
 * rows.
 *
 * Usage: node Contract14scripts/getActiveOrdersData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getActiveOrdersData
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getActiveOrdersData.js",
  contract: "saturnlimit",
  method: "getActiveOrdersData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getActiveOrdersData",
});
