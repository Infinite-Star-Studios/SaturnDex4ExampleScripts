#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolNftId — read (free, no wallet)
 * v4PoolNftId(poolId: number): number
 *
 * The pool's SATURN certificate id, 0 when it has none
 * (saturnpools.getPoolNftId).
 *
 * Returns number: Certificate id, or 0.
 *
 * Usage: node Lending7scripts/v4PoolNftId.js <poolId>
 *   poolId (number): v4 pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolNftId
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolNftId.js",
  contract: "saturndexadapt",
  method: "v4PoolNftId",
  params: [
    { name: "poolId", type: "number", desc: "v4 pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolNftId",
});
