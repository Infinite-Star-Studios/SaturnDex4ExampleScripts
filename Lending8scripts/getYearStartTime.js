#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getYearStartTime — read (free, no wallet)
 * getYearStartTime(): number
 *
 * Returns the unix timestamp at which the current annual deposit window
 * started. Pair with getYearlyDurationSeconds to compute when the window
 * resets.
 *
 * Returns number: Unix timestamp (seconds) of the current window start.
 *
 * Usage: node Lending8scripts/getYearStartTime.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getYearStartTime
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getYearStartTime.js",
  contract: "saturntaz",
  method: "getYearStartTime",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getYearStartTime",
});
