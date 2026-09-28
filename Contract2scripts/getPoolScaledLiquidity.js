#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolScaledLiquidity — read (free, no wallet)
 * getPoolScaledLiquidity(poolId: number): number
 *
 * Returns the smaller of the pool's two scaled reserves — a cheap "depth"
 * metric for ranking pools.
 *
 * Returns number: min(reserveA, reserveB) in scaled units.
 *
 * Usage: node Contract2scripts/getPoolScaledLiquidity.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolScaledLiquidity
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolScaledLiquidity.js",
  contract: "saturnpools",
  method: "getPoolScaledLiquidity",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolScaledLiquidity",
});
