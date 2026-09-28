#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketBetToken — read (free, no wallet)
 * getMarketBetToken(marketId: number): string
 *
 * Returns the token symbol this market takes bets in and pays out in. Added in
 * 4.1.6.
 *
 * Returns string: Bet token symbol; empty string for an unknown id.
 *
 * Usage: node Contract15scripts/getMarketBetToken.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketBetToken
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketBetToken.js",
  contract: "saturnpredict",
  method: "getMarketBetToken",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketBetToken",
});
