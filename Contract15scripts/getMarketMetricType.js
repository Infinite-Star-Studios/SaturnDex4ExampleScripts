#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketMetricType — read (free, no wallet)
 * getMarketMetricType(marketId: number): number
 *
 * Returns the metric this market is tracking.
 *
 * Returns number: 1 (pool provider fees) for every market createMarket()
 * accepts today. Markets created before metric 1 became the only choice can
 * still show 2 (k = resA * resB) or 3 (price) and resolve on that metric;
 * getOpenMarketsData on devnet still lists open metric-2 markets.
 *
 * Usage: node Contract15scripts/getMarketMetricType.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketMetricType
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketMetricType.js",
  contract: "saturnpredict",
  method: "getMarketMetricType",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketMetricType",
});
