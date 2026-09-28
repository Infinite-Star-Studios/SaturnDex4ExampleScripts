#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getLockedPoolCount — read (free, no wallet)
 * getLockedPoolCount(): number
 *
 * Length of getLockedPoolIds, expired locks not yet released included.
 *
 * Returns number: Number of pools on the lock list.
 *
 * Usage: node Contract23scripts/getLockedPoolCount.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getLockedPoolCount
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getLockedPoolCount.js",
  contract: "saturnlplock",
  method: "getLockedPoolCount",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getLockedPoolCount",
});
