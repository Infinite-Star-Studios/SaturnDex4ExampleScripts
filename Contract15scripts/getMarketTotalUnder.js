#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketTotalUnder — read (free, no wallet)
 * getMarketTotalUnder(marketId: number): number
 *
 * Returns the total amount wagered on UNDER.
 *
 * Returns number: Raw total.
 *
 * Usage: node Contract15scripts/getMarketTotalUnder.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketTotalUnder
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketTotalUnder.js",
  contract: "saturnpredict",
  method: "getMarketTotalUnder",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketTotalUnder",
});
