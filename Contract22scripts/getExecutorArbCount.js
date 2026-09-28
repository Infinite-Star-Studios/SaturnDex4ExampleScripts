#!/usr/bin/env node
"use strict";

/**
 * saturnstakearb.getExecutorArbCount — read (free, no wallet)
 * getExecutorArbCount(executor: address): number
 *
 * Returns the number of successful executeArb calls made by a specific
 * executor address. Use this on leaderboards or for per-bot performance
 * tracking.
 *
 * Returns number: Number of successful executeArb calls made by this executor.
 *
 * Usage: node Contract22scripts/getExecutorArbCount.js <executor>
 *   executor (address): The executor address to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnstakearb-getExecutorArbCount
 */

const { read } = require("../common");

read({
  file: "Contract22scripts/getExecutorArbCount.js",
  contract: "saturnstakearb",
  method: "getExecutorArbCount",
  params: [
    { name: "executor", type: "address", desc: "The executor address to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnstakearb-getExecutorArbCount",
});
