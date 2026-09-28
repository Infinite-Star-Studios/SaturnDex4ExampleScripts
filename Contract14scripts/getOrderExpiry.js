#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderExpiry — read (free, no wallet)
 * getOrderExpiry(orderId: number): number
 *
 * Unix time after which anyone may call expireOrder(); 0 = never expires.
 *
 * Returns number: Unix seconds or 0.
 *
 * Usage: node Contract14scripts/getOrderExpiry.js <orderId>
 *   orderId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderExpiry
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderExpiry.js",
  contract: "saturnlimit",
  method: "getOrderExpiry",
  params: [
    { name: "orderId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderExpiry",
});
