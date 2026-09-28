#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketStatus — read (free, no wallet)
 * getMarketStatus(marketId: number): number
 *
 * Returns the lifecycle status code.
 *
 * Returns number: 0=open, 1=resolved_over, 2=resolved_under, 3=cancelled,
 * 4=refund (one side had no bets).
 *
 * Usage: node Contract15scripts/getMarketStatus.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketStatus
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketStatus.js",
  contract: "saturnpredict",
  method: "getMarketStatus",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketStatus",
});
