#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolReserveB — read (free, no wallet)
 * getClPoolReserveB(poolId: number): number
 *
 * Returns the current scaled reserve of tokenB.
 *
 * Returns number: Scaled tokenB reserve (internal units).
 *
 * Usage: node Contract18scripts/getClPoolReserveB.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolReserveB
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolReserveB.js",
  contract: "saturnclpools",
  method: "getClPoolReserveB",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolReserveB",
});
