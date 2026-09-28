#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolTokenB — read (free, no wallet)
 * getClPoolTokenB(poolId: number): string
 *
 * Returns the symbol of the second token in the pool's pair.
 *
 * Returns string: Token symbol, e.g. "KCAL".
 *
 * Usage: node Contract18scripts/getClPoolTokenB.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolTokenB
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolTokenB.js",
  contract: "saturnclpools",
  method: "getClPoolTokenB",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolTokenB",
});
