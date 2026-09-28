#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderTokenIn — read (free, no wallet)
 * getOrderTokenIn(orderId: number): string
 *
 * Returns the symbol of the token the owner deposited.
 *
 * Returns string: tokenIn symbol.
 *
 * Usage: node Contract14scripts/getOrderTokenIn.js <orderId>
 *   orderId (number): The order to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderTokenIn
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderTokenIn.js",
  contract: "saturnlimit",
  method: "getOrderTokenIn",
  params: [
    { name: "orderId", type: "number", desc: "The order to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderTokenIn",
});
