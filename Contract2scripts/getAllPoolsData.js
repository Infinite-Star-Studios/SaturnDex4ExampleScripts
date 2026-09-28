#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getAllPoolsData — read (free, no wallet)
 * getAllPoolsData(): string*
 *
 * Yields one pipe-delimited row per registered pool (active or removed), in
 * registration order: poolId|tokenA|tokenB|reserveA|reserveB|feePer10k|active.
 * Reserves are in the protocol's 8-decimal scaled units — use scaleDown() to
 * display them. One call replaces seven per-pool reads when building a pool
 * table.
 *
 * Returns string*: Stream of
 * "poolId|tokenA|tokenB|reserveA|reserveB|feePer10k|active" rows.
 *
 * Usage: node Contract2scripts/getAllPoolsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getAllPoolsData
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getAllPoolsData.js",
  contract: "saturnpools",
  method: "getAllPoolsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getAllPoolsData",
});
