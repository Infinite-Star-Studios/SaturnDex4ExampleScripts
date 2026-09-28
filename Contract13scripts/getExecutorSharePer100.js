#!/usr/bin/env node
"use strict";

/**
 * saturnarb.getExecutorSharePer100 — read (free, no wallet)
 * getExecutorSharePer100(): number
 *
 * Always returns 100. Since 4.1.0 the executor keeps the entire arbitrage
 * profit; the method remains so older integrations that computed
 * executorProfit = rawProfit * share / 100 keep working.
 *
 * Returns number: Always 100.
 *
 * Usage: node Contract13scripts/getExecutorSharePer100.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnarb-getExecutorSharePer100
 */

const { read } = require("../common");

read({
  file: "Contract13scripts/getExecutorSharePer100.js",
  contract: "saturnarb",
  method: "getExecutorSharePer100",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnarb-getExecutorSharePer100",
});
