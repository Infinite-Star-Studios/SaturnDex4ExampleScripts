#!/usr/bin/env node
"use strict";

/**
 * saturnarb.getExecutorArbCount — read (free, no wallet)
 * getExecutorArbCount(executor: address): number
 *
 * Returns the number of successful arbs executed by a specific executor
 * address.
 *
 * Returns number: Per-executor successful arb count.
 *
 * Usage: node Contract13scripts/getExecutorArbCount.js <executor>
 *   executor (address): The agent address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnarb-getExecutorArbCount
 */

const { read } = require("../common");

read({
  file: "Contract13scripts/getExecutorArbCount.js",
  contract: "saturnarb",
  method: "getExecutorArbCount",
  params: [
    { name: "executor", type: "address", desc: "The agent address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnarb-getExecutorArbCount",
});
