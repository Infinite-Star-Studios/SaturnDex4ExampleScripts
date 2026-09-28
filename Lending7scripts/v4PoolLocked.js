#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolLocked — read (free, no wallet)
 * v4PoolLocked(poolId: number): number
 *
 * Returns 1 if the v4 pool is currently locked by any financial product (loan,
 * bond, rental, etc.), 0 if free. A locked pool cannot be removed and its
 * provider cannot change its fee; swaps, addLiquidity and provider fee accrual
 * continue. For a loan pledge specifically, read v4PoolPledged.
 *
 * Returns number: 1 if locked, 0 if free.
 *
 * Usage: node Lending7scripts/v4PoolLocked.js <poolId>
 *   poolId (number): Numeric pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolLocked
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolLocked.js",
  contract: "saturndexadapt",
  method: "v4PoolLocked",
  params: [
    { name: "poolId", type: "number", desc: "Numeric pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolLocked",
});
