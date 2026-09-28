#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolFeePer10k — read (free, no wallet)
 * getClPoolFeePer10k(poolId: number): number
 *
 * Returns the pool's swap fee in basis points out of 10,000. For example, 30
 * means 0.3%.
 *
 * Returns number: Fee in basis points (e.g. 30 = 0.3%).
 *
 * Usage: node Contract18scripts/getClPoolFeePer10k.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolFeePer10k
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolFeePer10k.js",
  contract: "saturnclpools",
  method: "getClPoolFeePer10k",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolFeePer10k",
});
