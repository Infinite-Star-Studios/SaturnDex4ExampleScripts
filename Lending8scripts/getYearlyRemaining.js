#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getYearlyRemaining — read (free, no wallet)
 * getYearlyRemaining(): number
 *
 * Convenience view: returns the remaining TAZ deposit budget in the current
 * annual window. If the window has expired, returns the full cap (a fresh
 * window starts on the next deposit). Use this to show treasury operators how
 * much headroom is left.
 *
 * Returns number: Remaining raw TAZ that may still be deposited in this
 * window.
 *
 * Usage: node Lending8scripts/getYearlyRemaining.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getYearlyRemaining
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getYearlyRemaining.js",
  contract: "saturntaz",
  method: "getYearlyRemaining",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getYearlyRemaining",
});
