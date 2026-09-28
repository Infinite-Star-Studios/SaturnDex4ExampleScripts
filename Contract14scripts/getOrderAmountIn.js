#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderAmountIn — read (free, no wallet)
 * getOrderAmountIn(orderId: number): number
 *
 * Returns the raw amount of tokenIn locked in the order.
 *
 * Returns number: Raw deposited amount.
 *
 * Usage: node Contract14scripts/getOrderAmountIn.js <orderId>
 *   orderId (number): The order to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderAmountIn
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderAmountIn.js",
  contract: "saturnlimit",
  method: "getOrderAmountIn",
  params: [
    { name: "orderId", type: "number", desc: "The order to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderAmountIn",
});
