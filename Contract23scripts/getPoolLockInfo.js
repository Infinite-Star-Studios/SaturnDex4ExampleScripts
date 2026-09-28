#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getPoolLockInfo — read (free, no wallet)
 * getPoolLockInfo(poolId: number): string
 *
 * The pool's burn and lock state in one call:
 * "burned:<0|1>|until:<unix>|locked:<0|1>|locks:<n>". burned is getBurned,
 * until is getLockUntil (0 = never locked), locked is getLocked (1 while until
 * is later than now) and locks is getLockCount.
 *
 * Returns string: "burned:<0|1>|until:<unix
 * seconds>|locked:<0|1>|locks:<count>".
 *
 * Usage: node Contract23scripts/getPoolLockInfo.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getPoolLockInfo
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getPoolLockInfo.js",
  contract: "saturnlplock",
  method: "getPoolLockInfo",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getPoolLockInfo",
});
