#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketMinBet — read (free, no wallet)
 * getMarketMinBet(marketId: number): number
 *
 * Returns the smallest amount one betOver or betUnder call may stake, in raw
 * bet-token units. Added in 4.1.6.
 *
 * Returns number: Minimum bet, raw bet-token units; 0 for an unknown id.
 *
 * Usage: node Contract15scripts/getMarketMinBet.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketMinBet
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketMinBet.js",
  contract: "saturnpredict",
  method: "getMarketMinBet",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketMinBet",
});
