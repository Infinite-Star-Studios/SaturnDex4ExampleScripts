#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolReserveA — read (free, no wallet)
 * v4PoolReserveA(poolId: number): number
 *
 * Returns the current reserve of token A in the specified v4 pool, in scaled
 * (8-decimal) units.
 *
 * Returns number: Scaled token A reserve amount.
 *
 * Usage: node Lending7scripts/v4PoolReserveA.js <poolId>
 *   poolId (number): Numeric pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolReserveA
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolReserveA.js",
  contract: "saturndexadapt",
  method: "v4PoolReserveA",
  params: [
    { name: "poolId", type: "number", desc: "Numeric pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolReserveA",
});
