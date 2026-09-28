#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getActivePoolsData — read (free, no wallet)
 * getActivePoolsData(): string*
 *
 * Same rows as getAllPoolsData() but only for pools whose active flag is 1.
 * The natural feed for a swap UI's pool list.
 *
 * Returns string*: Stream of
 * "poolId|tokenA|tokenB|reserveA|reserveB|feePer10k|active" rows (active = 1
 * on every row).
 *
 * Usage: node Contract2scripts/getActivePoolsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getActivePoolsData
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getActivePoolsData.js",
  contract: "saturnpools",
  method: "getActivePoolsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getActivePoolsData",
});
