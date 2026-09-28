#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketTotalOver — read (free, no wallet)
 * getMarketTotalOver(marketId: number): number
 *
 * Returns the total amount wagered on OVER.
 *
 * Returns number: Raw total.
 *
 * Usage: node Contract15scripts/getMarketTotalOver.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketTotalOver
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketTotalOver.js",
  contract: "saturnpredict",
  method: "getMarketTotalOver",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketTotalOver",
});
