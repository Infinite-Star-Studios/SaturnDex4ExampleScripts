#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketEndTime — read (free, no wallet)
 * getMarketEndTime(marketId: number): number
 *
 * Returns the Unix timestamp when betting closes and resolution unlocks.
 *
 * Returns number: Unix seconds.
 *
 * Usage: node Contract15scripts/getMarketEndTime.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketEndTime
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketEndTime.js",
  contract: "saturnpredict",
  method: "getMarketEndTime",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketEndTime",
});
