#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolReserveA — read (free, no wallet)
 * getClPoolReserveA(poolId: number): number
 *
 * Returns the current reserve of tokenA in 8-decimal scaled units: divide by
 * 1e8 for whole tokens, or use saturnpools.scaleDown(value, tokenA) for raw
 * units.
 *
 * Returns number: Scaled tokenA reserve (internal units).
 *
 * Usage: node Contract18scripts/getClPoolReserveA.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolReserveA
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolReserveA.js",
  contract: "saturnclpools",
  method: "getClPoolReserveA",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolReserveA",
});
