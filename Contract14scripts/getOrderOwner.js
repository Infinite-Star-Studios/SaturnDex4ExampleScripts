#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderOwner — read (free, no wallet)
 * getOrderOwner(orderId: number): address
 *
 * Returns the address that placed the order.
 *
 * Returns address: Order owner.
 *
 * Usage: node Contract14scripts/getOrderOwner.js <orderId>
 *   orderId (number): The order to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderOwner
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderOwner.js",
  contract: "saturnlimit",
  method: "getOrderOwner",
  params: [
    { name: "orderId", type: "number", desc: "The order to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderOwner",
});
