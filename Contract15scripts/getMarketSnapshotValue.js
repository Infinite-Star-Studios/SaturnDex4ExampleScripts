#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketSnapshotValue — read (free, no wallet)
 * getMarketSnapshotValue(marketId: number): number
 *
 * Returns the metric value captured at market creation, in the same units as
 * the threshold (see getMarketFeeBasis).
 *
 * Returns number: Snapshot value.
 *
 * Usage: node Contract15scripts/getMarketSnapshotValue.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketSnapshotValue
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketSnapshotValue.js",
  contract: "saturnpredict",
  method: "getMarketSnapshotValue",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketSnapshotValue",
});
