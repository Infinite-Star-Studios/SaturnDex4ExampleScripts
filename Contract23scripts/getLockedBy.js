#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getLockedBy — read (free, no wallet)
 * getLockedBy(poolId: number): address
 *
 * The wallet that made the pool's latest lockPool call (first lock or
 * extension). Kept after the lock ends or is released.
 *
 * Returns address: Address of the latest locker.
 *
 * Usage: node Contract23scripts/getLockedBy.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getLockedBy
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getLockedBy.js",
  contract: "saturnlplock",
  method: "getLockedBy",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getLockedBy",
});
