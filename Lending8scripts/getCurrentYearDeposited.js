#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getCurrentYearDeposited — read (free, no wallet)
 * getCurrentYearDeposited(): number
 *
 * Returns how much TAZ has been deposited by all authorized depositors in the
 * current annual window so far.
 *
 * Returns number: Raw TAZ deposited in the current window.
 *
 * Usage: node Lending8scripts/getCurrentYearDeposited.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getCurrentYearDeposited
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getCurrentYearDeposited.js",
  contract: "saturntaz",
  method: "getCurrentYearDeposited",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getCurrentYearDeposited",
});
