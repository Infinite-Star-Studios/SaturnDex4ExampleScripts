#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getLockUntil — read (free, no wallet)
 * getLockUntil(poolId: number): number
 *
 * Unix time the pool's lock ends. Reads saturnpools.getPoolLockUntil. The
 * value stays after the lock ends and after a burn, so compare it with the
 * current time or read getLocked.
 *
 * Returns number: Unix seconds. 0 = never locked; a past time = the lock has
 * run out.
 *
 * Usage: node Contract23scripts/getLockUntil.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getLockUntil
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getLockUntil.js",
  contract: "saturnlplock",
  method: "getLockUntil",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getLockUntil",
});
