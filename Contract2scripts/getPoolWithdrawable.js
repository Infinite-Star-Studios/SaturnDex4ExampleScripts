#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolWithdrawable — read (free, no wallet)
 * getPoolWithdrawable(poolId: number): number
 *
 * 1 when the provider could withdraw the pool today (liquidity not burned and
 * no live time lock: now ≥ getPoolLockUntil), 0 otherwise. Burns and time
 * locks are made through saturnlplock (burnPool, lockPool). A pool reading 0
 * cannot be pledged as loan collateral; the lending reference pool must read
 * 0.
 *
 * Returns number: 1 = withdrawable, 0 = burned or time-locked.
 *
 * Usage: node Contract2scripts/getPoolWithdrawable.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolWithdrawable
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolWithdrawable.js",
  contract: "saturnpools",
  method: "getPoolWithdrawable",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolWithdrawable",
});
