#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketBetDecimals — read (free, no wallet)
 * getMarketBetDecimals(marketId: number): number
 *
 * Returns the decimals of the market's bet token, read live with
 * Token.getDecimals. Added in 4.1.6. Divide raw amounts by 10^decimals for
 * display.
 *
 * Returns number: Bet token decimals; 0 when the market does not exist.
 *
 * Usage: node Contract15scripts/getMarketBetDecimals.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketBetDecimals
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketBetDecimals.js",
  contract: "saturnpredict",
  method: "getMarketBetDecimals",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketBetDecimals",
});
