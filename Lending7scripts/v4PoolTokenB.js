#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolTokenB — read (free, no wallet)
 * v4PoolTokenB(poolId: number): string
 *
 * Returns the symbol of token B for the given v4 pool.
 *
 * Returns string: Symbol of the pool's token B.
 *
 * Usage: node Lending7scripts/v4PoolTokenB.js <poolId>
 *   poolId (number): Numeric pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolTokenB
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolTokenB.js",
  contract: "saturndexadapt",
  method: "v4PoolTokenB",
  params: [
    { name: "poolId", type: "number", desc: "Numeric pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolTokenB",
});
