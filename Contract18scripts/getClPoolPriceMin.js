#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolPriceMin — read (free, no wallet)
 * getClPoolPriceMin(poolId: number): number
 *
 * Returns the lower bound of the pool's active price range. Price is stored as
 * (reserveB / reserveA) × 1e8.
 *
 * Returns number: Minimum price (scaled 1e8).
 *
 * Usage: node Contract18scripts/getClPoolPriceMin.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolPriceMin
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolPriceMin.js",
  contract: "saturnclpools",
  method: "getClPoolPriceMin",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolPriceMin",
});
