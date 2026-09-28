#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketPoolId — read (free, no wallet)
 * getMarketPoolId(marketId: number): number
 *
 * Returns the poolId being forecasted.
 *
 * Returns number: Underlying pool ID.
 *
 * Usage: node Contract15scripts/getMarketPoolId.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketPoolId
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketPoolId.js",
  contract: "saturnpredict",
  method: "getMarketPoolId",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketPoolId",
});
