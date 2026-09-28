#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getTotalFeesCollected — read (free, no wallet)
 * getTotalFeesCollected(): number
 *
 * Lifetime lock and burn fees this contract has sent to the fee wallet, in raw
 * TAZ (9 decimals).
 *
 * Returns number: Raw TAZ. 1,000,000,000 = 1 TAZ.
 *
 * Usage: node Contract23scripts/getTotalFeesCollected.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getTotalFeesCollected
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getTotalFeesCollected.js",
  contract: "saturnlplock",
  method: "getTotalFeesCollected",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getTotalFeesCollected",
});
