#!/usr/bin/env node
"use strict";

/**
 * saturnstakearb.getTotalArbs — read (free, no wallet)
 * getTotalArbs(): number
 *
 * Returns the cumulative count of successful stake-arbitrage executions since
 * deployment.
 *
 * Returns number: Total successful executeArb calls.
 *
 * Usage: node Contract22scripts/getTotalArbs.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnstakearb-getTotalArbs
 */

const { read } = require("../common");

read({
  file: "Contract22scripts/getTotalArbs.js",
  contract: "saturnstakearb",
  method: "getTotalArbs",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnstakearb-getTotalArbs",
});
