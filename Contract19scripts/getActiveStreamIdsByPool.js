#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getActiveStreamIdsByPool — read (free, no wallet)
 * getActiveStreamIdsByPool(poolId: number): number*
 *
 * Returns only the active stream IDs targeting a specific pool. Useful for
 * pool analytics pages that want to show pending TWAMM flow alongside live
 * reserves.
 *
 * Returns number*: Sequence of active stream IDs targeting the given pool.
 *
 * Usage: node Contract19scripts/getActiveStreamIdsByPool.js <poolId>
 *   poolId (number): Pool ID to filter streams by.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getActiveStreamIdsByPool
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getActiveStreamIdsByPool.js",
  contract: "saturntwamm",
  method: "getActiveStreamIdsByPool",
  params: [
    { name: "poolId", type: "number", desc: "Pool ID to filter streams by." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getActiveStreamIdsByPool",
});
