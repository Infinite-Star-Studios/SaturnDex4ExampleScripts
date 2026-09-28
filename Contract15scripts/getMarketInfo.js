#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketInfo — read (free, no wallet)
 * getMarketInfo(marketId: number): string
 *
 * One-shot snapshot for the market page. Returns an underscore-delimited
 * string with the key fields.
 *
 * Returns string:
 * pool:<poolId>_metric:<1|2|3>_threshold:<n>_end:<unix>_snapshot:<n>_over:<raw>_under:<raw>_status:<0-4>_token:<betToken>_decimals:<n>_minBet:<raw>_feeBasis:<0|1|2>
 *
 * Usage: node Contract15scripts/getMarketInfo.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketInfo
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketInfo.js",
  contract: "saturnpredict",
  method: "getMarketInfo",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketInfo",
});
