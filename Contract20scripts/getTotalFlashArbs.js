#!/usr/bin/env node
"use strict";

/**
 * saturnflash.getTotalFlashArbs — read (free, no wallet)
 * getTotalFlashArbs(): number
 *
 * Returns the cumulative count of successful flash arbitrage executions since
 * deployment.
 *
 * Returns number: Total successful executeFlashArb calls.
 *
 * Usage: node Contract20scripts/getTotalFlashArbs.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-getTotalFlashArbs
 */

const { read } = require("../common");

read({
  file: "Contract20scripts/getTotalFlashArbs.js",
  contract: "saturnflash",
  method: "getTotalFlashArbs",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnflash-getTotalFlashArbs",
});
