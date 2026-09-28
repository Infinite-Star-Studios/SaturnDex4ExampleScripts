#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderMinAmountOut — read (free, no wallet)
 * getOrderMinAmountOut(orderId: number): number
 *
 * Returns the limit price as a raw minimum tokenOut amount.
 *
 * Returns number: Raw minAmountOut.
 *
 * Usage: node Contract14scripts/getOrderMinAmountOut.js <orderId>
 *   orderId (number): The order to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderMinAmountOut
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderMinAmountOut.js",
  contract: "saturnlimit",
  method: "getOrderMinAmountOut",
  params: [
    { name: "orderId", type: "number", desc: "The order to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderMinAmountOut",
});
