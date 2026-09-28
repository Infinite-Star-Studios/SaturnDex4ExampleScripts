#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getActiveOptionsData — read (free, no wallet)
 * getActiveOptionsData(): string*
 *
 * One pipe-delimited row per active option:
 * optionId|poolId|writer|buyer|targetFee|premium|premiumToken|endTime|durationSeconds|exercised|status.
 * premium is raw units of premiumToken.
 *
 * Returns string*: Stream of
 * "optionId|poolId|writer|buyer|targetFee|premium|premiumToken|endTime|durationSeconds|exercised|status"
 * rows.
 *
 * Usage: node Contract11scripts/getActiveOptionsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getActiveOptionsData
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getActiveOptionsData.js",
  contract: "saturnfeeopts",
  method: "getActiveOptionsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getActiveOptionsData",
});
