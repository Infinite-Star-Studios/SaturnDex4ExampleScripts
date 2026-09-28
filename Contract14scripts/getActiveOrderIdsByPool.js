#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getActiveOrderIdsByPool — read (free, no wallet)
 * getActiveOrderIdsByPool(poolId: number): number*
 *
 * Yields the active order ids that target one pool — the natural query for a
 * bot watching a single market.
 *
 * Returns number*: Stream of order ids.
 *
 * Usage: node Contract14scripts/getActiveOrderIdsByPool.js <poolId>
 *   poolId (number): Pool to filter on.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getActiveOrderIdsByPool
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getActiveOrderIdsByPool.js",
  contract: "saturnlimit",
  method: "getActiveOrderIdsByPool",
  params: [
    { name: "poolId", type: "number", desc: "Pool to filter on." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getActiveOrderIdsByPool",
});
