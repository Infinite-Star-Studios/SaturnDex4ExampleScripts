#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getLocked — read (free, no wallet)
 * getLocked(poolId: number): number
 *
 * 1 while the pool's time lock is live (getLockUntil later than the block
 * time), 0 otherwise. It ignores burns: a burned pool reads 0 unless it was
 * burned during a live lock. To know whether the pool can be withdrawn, read
 * saturnpools.getPoolWithdrawable.
 *
 * Returns number: 1 = live time lock, 0 = none or expired.
 *
 * Usage: node Contract23scripts/getLocked.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getLocked
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getLocked.js",
  contract: "saturnlplock",
  method: "getLocked",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getLocked",
});
