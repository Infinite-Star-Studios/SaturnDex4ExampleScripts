#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolFinancialLockCount — read (free, no wallet)
 * getPoolFinancialLockCount(poolId: number): number
 *
 * How many financial products hold this pool: bonds, rentals, fee options,
 * syndicate and launchpad pools, or a loan pledge (exactly 1 while
 * getPoolPawned() = 1). While > 0 the pool cannot be removed and the provider
 * cannot change its fee; swaps and addLiquidity continue.
 *
 * Returns number: Number of financial-product locks on the pool.
 *
 * Usage: node Contract2scripts/getPoolFinancialLockCount.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolFinancialLockCount
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolFinancialLockCount.js",
  contract: "saturnpools",
  method: "getPoolFinancialLockCount",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolFinancialLockCount",
});
