#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolTokenA — read (free, no wallet)
 * getClPoolTokenA(poolId: number): string
 *
 * Returns the symbol of the first token in the pool's pair.
 *
 * Returns string: Token symbol, e.g. "SOUL".
 *
 * Usage: node Contract18scripts/getClPoolTokenA.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolTokenA
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolTokenA.js",
  contract: "saturnclpools",
  method: "getClPoolTokenA",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolTokenA",
});
