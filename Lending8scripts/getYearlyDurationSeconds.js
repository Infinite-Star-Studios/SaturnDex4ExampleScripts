#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getYearlyDurationSeconds — read (free, no wallet)
 * getYearlyDurationSeconds(): number
 *
 * Returns the length of one deposit-cap window in seconds (default: 31,536,000
 * = 365 days).
 *
 * Returns number: Window duration in seconds.
 *
 * Usage: node Lending8scripts/getYearlyDurationSeconds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getYearlyDurationSeconds
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getYearlyDurationSeconds.js",
  contract: "saturntaz",
  method: "getYearlyDurationSeconds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getYearlyDurationSeconds",
});
