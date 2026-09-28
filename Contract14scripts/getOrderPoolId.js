#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderPoolId — read (free, no wallet)
 * getOrderPoolId(orderId: number): number
 *
 * Returns the poolId the order will route through.
 *
 * Returns number: Target pool ID.
 *
 * Usage: node Contract14scripts/getOrderPoolId.js <orderId>
 *   orderId (number): The order to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderPoolId
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderPoolId.js",
  contract: "saturnlimit",
  method: "getOrderPoolId",
  params: [
    { name: "orderId", type: "number", desc: "The order to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderPoolId",
});
