#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderTokenOut — read (free, no wallet)
 * getOrderTokenOut(orderId: number): string
 *
 * Returns the symbol of the token the owner wants to receive.
 *
 * Returns string: tokenOut symbol.
 *
 * Usage: node Contract14scripts/getOrderTokenOut.js <orderId>
 *   orderId (number): The order to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderTokenOut
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderTokenOut.js",
  contract: "saturnlimit",
  method: "getOrderTokenOut",
  params: [
    { name: "orderId", type: "number", desc: "The order to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderTokenOut",
});
