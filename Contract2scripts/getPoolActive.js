#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolActive — read (free, no wallet)
 * getPoolActive(poolId: number): number
 *
 * Returns 1 if the pool is active (can be swapped, can accept liquidity), 0 if
 * it has been removed.
 *
 * Returns number: 1 = active, 0 = removed.
 *
 * Usage: node Contract2scripts/getPoolActive.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolActive
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolActive.js",
  contract: "saturnpools",
  method: "getPoolActive",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolActive",
});
