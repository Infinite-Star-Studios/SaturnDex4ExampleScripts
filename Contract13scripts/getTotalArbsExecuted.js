#!/usr/bin/env node
"use strict";

/**
 * saturnarb.getTotalArbsExecuted — read (free, no wallet)
 * getTotalArbsExecuted(): number
 *
 * Returns the total number of successful arbitrage executions across all
 * executors since deploy.
 *
 * Returns number: Cumulative successful arbs.
 *
 * Usage: node Contract13scripts/getTotalArbsExecuted.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnarb-getTotalArbsExecuted
 */

const { read } = require("../common");

read({
  file: "Contract13scripts/getTotalArbsExecuted.js",
  contract: "saturnarb",
  method: "getTotalArbsExecuted",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnarb-getTotalArbsExecuted",
});
