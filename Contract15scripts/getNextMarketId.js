#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getNextMarketId — read (free, no wallet)
 * getNextMarketId(): number
 *
 * Returns the marketId that will be assigned to the next createMarket call.
 *
 * Returns number: Next market ID (starts at 1).
 *
 * Usage: node Contract15scripts/getNextMarketId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getNextMarketId
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getNextMarketId.js",
  contract: "saturnpredict",
  method: "getNextMarketId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getNextMarketId",
});
