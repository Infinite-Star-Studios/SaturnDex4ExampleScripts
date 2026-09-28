#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getActiveClPoolsData — read (free, no wallet)
 * getActiveClPoolsData(): string*
 *
 * Batch view that streams one encoded row per active CL pool — eliminates N
 * round-trips when building a pool-list UI. Each row is pipe-delimited:
 * "poolId|provider|tokenA|tokenB|reserveA|reserveB|priceMin|priceMax|fee|active".
 * Reserves are in scaled internal units.
 *
 * Returns string*: Sequence of pipe-delimited pool data rows. One row per
 * active pool.
 *
 * Usage: node Contract18scripts/getActiveClPoolsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getActiveClPoolsData
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getActiveClPoolsData.js",
  contract: "saturnclpools",
  method: "getActiveClPoolsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getActiveClPoolsData",
});
