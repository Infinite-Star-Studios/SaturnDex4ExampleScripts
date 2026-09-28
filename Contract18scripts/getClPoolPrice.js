#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolPrice — read (free, no wallet)
 * getClPoolPrice(poolId: number): number
 *
 * Computes and returns the current spot price of the pool as (reserveB × 1e8)
 * / reserveA. Returns 0 if reserveA is zero (pool drained or not yet funded).
 * Use this to display a live price quote or to estimate slippage before
 * swapping.
 *
 * Returns number: Current price, scaled by 1e8 (tokenB per tokenA). 0 if pool
 * has no tokenA reserve.
 *
 * Usage: node Contract18scripts/getClPoolPrice.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolPrice
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolPrice.js",
  contract: "saturnclpools",
  method: "getClPoolPrice",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolPrice",
});
