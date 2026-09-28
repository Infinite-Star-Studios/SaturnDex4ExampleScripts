#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getBurned — read (free, no wallet)
 * getBurned(poolId: number): number
 *
 * 1 when the pool's liquidity is burned, 0 otherwise. Reads
 * saturnpools.getPoolBurned.
 *
 * Returns number: 1 = burned (permanent), 0 = not burned.
 *
 * Usage: node Contract23scripts/getBurned.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getBurned
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getBurned.js",
  contract: "saturnlplock",
  method: "getBurned",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getBurned",
});
