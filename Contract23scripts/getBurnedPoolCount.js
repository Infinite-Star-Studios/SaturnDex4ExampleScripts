#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getBurnedPoolCount — read (free, no wallet)
 * getBurnedPoolCount(): number
 *
 * Number of burned pools (length of getBurnedPoolIds).
 *
 * Returns number: Number of burned pools.
 *
 * Usage: node Contract23scripts/getBurnedPoolCount.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getBurnedPoolCount
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getBurnedPoolCount.js",
  contract: "saturnlplock",
  method: "getBurnedPoolCount",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getBurnedPoolCount",
});
