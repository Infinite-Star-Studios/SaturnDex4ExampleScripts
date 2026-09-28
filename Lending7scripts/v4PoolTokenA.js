#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolTokenA — read (free, no wallet)
 * v4PoolTokenA(poolId: number): string
 *
 * Returns the symbol of token A for the given v4 pool.
 *
 * Returns string: Symbol of the pool's token A.
 *
 * Usage: node Lending7scripts/v4PoolTokenA.js <poolId>
 *   poolId (number): Numeric pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolTokenA
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolTokenA.js",
  contract: "saturndexadapt",
  method: "v4PoolTokenA",
  params: [
    { name: "poolId", type: "number", desc: "Numeric pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolTokenA",
});
