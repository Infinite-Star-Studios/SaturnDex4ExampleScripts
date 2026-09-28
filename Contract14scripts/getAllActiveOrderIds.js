#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getAllActiveOrderIds — read (free, no wallet)
 * getAllActiveOrderIds(): number*
 *
 * Generator yielding the id of every live (status 0) order. executeOrder,
 * cancelOrder and expireOrder remove an order from the list, so no status
 * filter is needed; an order whose expiry has passed stays listed (still
 * status 0) until someone calls expireOrder.
 *
 * Returns number*: Iterable of order IDs.
 *
 * Usage: node Contract14scripts/getAllActiveOrderIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getAllActiveOrderIds
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getAllActiveOrderIds.js",
  contract: "saturnlimit",
  method: "getAllActiveOrderIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getAllActiveOrderIds",
});
