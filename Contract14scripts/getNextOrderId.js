#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getNextOrderId — read (free, no wallet)
 * getNextOrderId(): number
 *
 * Returns the orderId that will be assigned to the next placeOrderV2 call.
 *
 * Returns number: Next order ID (starts at 1).
 *
 * Usage: node Contract14scripts/getNextOrderId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getNextOrderId
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getNextOrderId.js",
  contract: "saturnlimit",
  method: "getNextOrderId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getNextOrderId",
});
