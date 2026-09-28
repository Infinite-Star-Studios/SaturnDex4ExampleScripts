#!/usr/bin/env node
"use strict";

/**
 * saturnflash.getExecutorArbCount — read (free, no wallet)
 * getExecutorArbCount(executor: address): number
 *
 * Returns the number of successful flash arb executions performed by a
 * specific executor address. Use this on leaderboards or to track your own
 * bot's activity.
 *
 * Returns number: Number of successful executeFlashArb calls made by this
 * address.
 *
 * Usage: node Contract20scripts/getExecutorArbCount.js <executor>
 *   executor (address): The executor address to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-getExecutorArbCount
 */

const { read } = require("../common");

read({
  file: "Contract20scripts/getExecutorArbCount.js",
  contract: "saturnflash",
  method: "getExecutorArbCount",
  params: [
    { name: "executor", type: "address", desc: "The executor address to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnflash-getExecutorArbCount",
});
