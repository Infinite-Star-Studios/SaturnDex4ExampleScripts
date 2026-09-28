#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolActive — read (free, no wallet)
 * v4PoolActive(poolId: number): number
 *
 * Returns 1 if the v4 pool is active (live and accepting swaps), 0 otherwise.
 * Check before submitting any collateral or pricing call against a specific
 * pool ID.
 *
 * Returns number: 1 if active, 0 if inactive or non-existent.
 *
 * Usage: node Lending7scripts/v4PoolActive.js <poolId>
 *   poolId (number): Numeric pool ID in the v4 PoolRegistry.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolActive
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolActive.js",
  contract: "saturndexadapt",
  method: "v4PoolActive",
  params: [
    { name: "poolId", type: "number", desc: "Numeric pool ID in the v4 PoolRegistry." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolActive",
});
