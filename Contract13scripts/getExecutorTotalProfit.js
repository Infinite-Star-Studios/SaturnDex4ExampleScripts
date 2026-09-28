#!/usr/bin/env node
"use strict";

/**
 * saturnarb.getExecutorTotalProfit — read (free, no wallet)
 * getExecutorTotalProfit(executor: address): number
 *
 * Returns the total profit (finalAmount − amountIn, before gas) earned by a
 * specific executor. The executor keeps all of it; there is no split.
 *
 * Returns number: Cumulative executor-take-home profit, raw.
 *
 * Usage: node Contract13scripts/getExecutorTotalProfit.js <executor>
 *   executor (address): The agent address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnarb-getExecutorTotalProfit
 */

const { read } = require("../common");

read({
  file: "Contract13scripts/getExecutorTotalProfit.js",
  contract: "saturnarb",
  method: "getExecutorTotalProfit",
  params: [
    { name: "executor", type: "address", desc: "The agent address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnarb-getExecutorTotalProfit",
});
