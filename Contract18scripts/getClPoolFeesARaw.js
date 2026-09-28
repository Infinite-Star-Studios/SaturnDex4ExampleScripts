#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolFeesARaw — read (free, no wallet)
 * getClPoolFeesARaw(poolId: number): number
 *
 * Returns the current unclaimed fee accumulator for tokenA, in raw (unscaled)
 * units.
 *
 * Returns number: Unclaimed tokenA fees (raw units).
 *
 * Usage: node Contract18scripts/getClPoolFeesARaw.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolFeesARaw
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolFeesARaw.js",
  contract: "saturnclpools",
  method: "getClPoolFeesARaw",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolFeesARaw",
});
