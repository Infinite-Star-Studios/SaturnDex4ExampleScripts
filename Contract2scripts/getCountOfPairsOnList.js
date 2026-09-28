#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getCountOfPairsOnList — read (free, no wallet)
 * getCountOfPairsOnList(): number
 *
 * Total number of unique token pairs that have ever had at least one pool.
 *
 * Returns number: Pair count.
 *
 * Usage: node Contract2scripts/getCountOfPairsOnList.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getCountOfPairsOnList
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getCountOfPairsOnList.js",
  contract: "saturnpools",
  method: "getCountOfPairsOnList",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getCountOfPairsOnList",
});
