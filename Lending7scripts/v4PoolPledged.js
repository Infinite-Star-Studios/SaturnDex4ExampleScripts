#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolPledged — read (free, no wallet)
 * v4PoolPledged(poolId: number): number
 *
 * 1 while the pool is pledged to a loan (saturnpools.getPoolPawned).
 *
 * Returns number: 1 = pledged, 0 = not.
 *
 * Usage: node Lending7scripts/v4PoolPledged.js <poolId>
 *   poolId (number): v4 pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolPledged
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolPledged.js",
  contract: "saturndexadapt",
  method: "v4PoolPledged",
  params: [
    { name: "poolId", type: "number", desc: "v4 pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolPledged",
});
