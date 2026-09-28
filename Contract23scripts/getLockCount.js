#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getLockCount — read (free, no wallet)
 * getLockCount(poolId: number): number
 *
 * Number of successful lockPool calls on the pool: the first lock, every
 * extension and every new lock after one ran out. Never goes down.
 *
 * Returns number: Lock call count, 0 when never locked.
 *
 * Usage: node Contract23scripts/getLockCount.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getLockCount
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getLockCount.js",
  contract: "saturnlplock",
  method: "getLockCount",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getLockCount",
});
