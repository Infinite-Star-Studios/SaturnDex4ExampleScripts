#!/usr/bin/env node
"use strict";

/**
 * saturnflash.getExecutorTotalProfit — read (free, no wallet)
 * getExecutorTotalProfit(executor: address): number
 *
 * Returns the lifetime net profit (after the flash fee, before gas) paid to an
 * executor across all successful executeFlashArb calls. Raw amounts of
 * different tokenStart symbols are added together, so keep per-token profit
 * from your own FlashArbExecuted events.
 *
 * Returns number: Lifetime net profit in raw token units paid to this
 * executor.
 *
 * Usage: node Contract20scripts/getExecutorTotalProfit.js <executor>
 *   executor (address): The executor address to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-getExecutorTotalProfit
 */

const { read } = require("../common");

read({
  file: "Contract20scripts/getExecutorTotalProfit.js",
  contract: "saturnflash",
  method: "getExecutorTotalProfit",
  params: [
    { name: "executor", type: "address", desc: "The executor address to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnflash-getExecutorTotalProfit",
});
