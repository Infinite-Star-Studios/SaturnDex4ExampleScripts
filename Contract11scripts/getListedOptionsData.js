#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getListedOptionsData — read (free, no wallet)
 * getListedOptionsData(): string*
 *
 * Same row layout as getActiveOptionsData() for options in status 0; the buyer
 * field is the text "[Null address]" and endTime is 0.
 *
 * Returns string*: Stream of
 * "optionId|poolId|writer|buyer|targetFee|premium|premiumToken|endTime|durationSeconds|exercised|status"
 * rows.
 *
 * Usage: node Contract11scripts/getListedOptionsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getListedOptionsData
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getListedOptionsData.js",
  contract: "saturnfeeopts",
  method: "getListedOptionsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getListedOptionsData",
});
