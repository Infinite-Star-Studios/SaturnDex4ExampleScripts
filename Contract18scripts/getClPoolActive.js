#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolActive — read (free, no wallet)
 * getClPoolActive(poolId: number): number
 *
 * Returns 1 if the pool is active and accepting swaps/liquidity, 0 if it has
 * been removed.
 *
 * Returns number: 1 = active, 0 = removed/inactive.
 *
 * Usage: node Contract18scripts/getClPoolActive.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolActive
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolActive.js",
  contract: "saturnclpools",
  method: "getClPoolActive",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolActive",
});
