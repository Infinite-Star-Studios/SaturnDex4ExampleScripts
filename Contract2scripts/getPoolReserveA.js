#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolReserveA — read (free, no wallet)
 * getPoolReserveA(poolId: number): number
 *
 * Returns the scaled reserve of token A in the pool. Pass the result through
 * scaleDown() to get the raw amount for display.
 *
 * Returns number: Scaled reserve of token A.
 *
 * Usage: node Contract2scripts/getPoolReserveA.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolReserveA
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolReserveA.js",
  contract: "saturnpools",
  method: "getPoolReserveA",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolReserveA",
});
