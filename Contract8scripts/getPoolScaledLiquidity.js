#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getPoolScaledLiquidity — read (free, no wallet)
 * getPoolScaledLiquidity(poolId: number): number
 *
 * Re-export of SaturnPools.getPoolScaledLiquidity — cheap "depth" metric for
 * ranking pools.
 *
 * Returns number: min(reserveA, reserveB) in scaled units.
 *
 * Usage: node Contract8scripts/getPoolScaledLiquidity.js <poolId>
 *   poolId (number): Pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getPoolScaledLiquidity
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getPoolScaledLiquidity.js",
  contract: "saturnrouter",
  method: "getPoolScaledLiquidity",
  params: [
    { name: "poolId", type: "number", desc: "Pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getPoolScaledLiquidity",
});
