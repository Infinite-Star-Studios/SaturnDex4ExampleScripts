#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolTokenB — read (free, no wallet)
 * getPoolTokenB(poolId: number): string
 *
 * Returns the symbol of the pool's second token (slot B).
 *
 * Returns string: Token symbol stored in slot B.
 *
 * Usage: node Contract2scripts/getPoolTokenB.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolTokenB
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolTokenB.js",
  contract: "saturnpools",
  method: "getPoolTokenB",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolTokenB",
});
