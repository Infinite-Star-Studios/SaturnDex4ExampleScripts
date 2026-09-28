#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getOpenMarketsData — read (free, no wallet)
 * getOpenMarketsData(): string*
 *
 * One pipe-delimited row per market still in status 0 (open — not yet
 * resolved, whether or not endTime has passed):
 * marketId|poolId|metricType|threshold|endTime|snapshotValue|totalOver|totalUnder|status.
 * Scans ids 1..nextMarketId-1.
 *
 * Returns string*: Stream of
 * "marketId|poolId|metricType|threshold|endTime|snapshotValue|totalOver|totalUnder|status"
 * rows.
 *
 * Usage: node Contract15scripts/getOpenMarketsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getOpenMarketsData
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getOpenMarketsData.js",
  contract: "saturnpredict",
  method: "getOpenMarketsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getOpenMarketsData",
});
