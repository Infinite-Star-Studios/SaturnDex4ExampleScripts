#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolLockUntil — read (free, no wallet)
 * getPoolLockUntil(poolId: number): number
 *
 * Unix time until which the pool's liquidity is time-locked through
 * saturnlplock.lockPool (0 = never locked). removePool refuses the pool until
 * then with "Pool liquidity is time-locked until <unix>". A live lock can only
 * be extended, never shortened.
 *
 * Returns number: Unix seconds, 0 when not time-locked.
 *
 * Usage: node Contract2scripts/getPoolLockUntil.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolLockUntil
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolLockUntil.js",
  contract: "saturnpools",
  method: "getPoolLockUntil",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolLockUntil",
});
