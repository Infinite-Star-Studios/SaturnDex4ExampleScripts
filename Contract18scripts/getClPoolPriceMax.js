#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolPriceMax — read (free, no wallet)
 * getClPoolPriceMax(poolId: number): number
 *
 * Returns the upper bound of the pool's active price range.
 *
 * Returns number: Maximum price (scaled 1e8).
 *
 * Usage: node Contract18scripts/getClPoolPriceMax.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolPriceMax
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolPriceMax.js",
  contract: "saturnclpools",
  method: "getClPoolPriceMax",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolPriceMax",
});
