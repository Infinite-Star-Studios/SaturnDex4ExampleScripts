#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getLockedAt — read (free, no wallet)
 * getLockedAt(poolId: number): number
 *
 * Unix time of the pool's latest lockPool call (first lock or extension).
 *
 * Returns number: Unix seconds, 0 when never locked.
 *
 * Usage: node Contract23scripts/getLockedAt.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getLockedAt
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getLockedAt.js",
  contract: "saturnlplock",
  method: "getLockedAt",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getLockedAt",
});
