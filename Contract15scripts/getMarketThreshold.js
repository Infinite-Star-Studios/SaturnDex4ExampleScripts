#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketThreshold — read (free, no wallet)
 * getMarketThreshold(marketId: number): number
 *
 * Returns the required delta for OVER to win, in metric units (fee basis 2:
 * 8-decimal scaled fees, tokenA + tokenB added).
 *
 * Returns number: Threshold value.
 *
 * Usage: node Contract15scripts/getMarketThreshold.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketThreshold
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketThreshold.js",
  contract: "saturnpredict",
  method: "getMarketThreshold",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketThreshold",
});
