#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolFeesBRaw — read (free, no wallet)
 * getClPoolFeesBRaw(poolId: number): number
 *
 * Returns the current unclaimed fee accumulator for tokenB, in raw (unscaled)
 * units.
 *
 * Returns number: Unclaimed tokenB fees (raw units).
 *
 * Usage: node Contract18scripts/getClPoolFeesBRaw.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolFeesBRaw
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolFeesBRaw.js",
  contract: "saturnclpools",
  method: "getClPoolFeesBRaw",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolFeesBRaw",
});
