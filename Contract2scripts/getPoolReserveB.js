#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolReserveB — read (free, no wallet)
 * getPoolReserveB(poolId: number): number
 *
 * Returns the scaled reserve of token B in the pool.
 *
 * Returns number: Scaled reserve of token B.
 *
 * Usage: node Contract2scripts/getPoolReserveB.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolReserveB
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolReserveB.js",
  contract: "saturnpools",
  method: "getPoolReserveB",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolReserveB",
});
