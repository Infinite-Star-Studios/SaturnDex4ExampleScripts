#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getMaxTruncationPercent — read (free, no wallet)
 * getMaxTruncationPercent(): number
 *
 * Maximum allowable truncation loss (in %) when removing a pool. If scale-down
 * rounding would lose more than this percentage of either token's reserve,
 * removePool() reverts.
 *
 * Returns number: Maximum truncation percent (default: 10).
 *
 * Usage: node Contract1scripts/getMaxTruncationPercent.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getMaxTruncationPercent
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getMaxTruncationPercent.js",
  contract: "saturnadmin",
  method: "getMaxTruncationPercent",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getMaxTruncationPercent",
});
