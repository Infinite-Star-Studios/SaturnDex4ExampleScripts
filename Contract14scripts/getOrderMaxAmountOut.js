#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderMaxAmountOut — read (free, no wallet)
 * getOrderMaxAmountOut(orderId: number): number
 *
 * Fill ceiling in raw tokenOut; 0 means no ceiling. executeOrder() reverts
 * with "Output exceeds ceiling" when the pool would pay more.
 *
 * Returns number: Raw tokenOut or 0.
 *
 * Usage: node Contract14scripts/getOrderMaxAmountOut.js <orderId>
 *   orderId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderMaxAmountOut
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderMaxAmountOut.js",
  contract: "saturnlimit",
  method: "getOrderMaxAmountOut",
  params: [
    { name: "orderId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderMaxAmountOut",
});
