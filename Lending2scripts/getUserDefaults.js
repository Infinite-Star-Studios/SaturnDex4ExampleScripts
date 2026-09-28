#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserDefaults — read (free, no wallet)
 * getUserDefaults(user: address): number
 *
 * Count of loan defaults (saturnloans records one on a lender-triggered
 * default and on a liquidation). Each costs defaultPenalty points (150 live),
 * the heaviest penalty in the formula, and resets the current streak
 * (getUserConsecutiveOnTime) to 0; the best streak is kept.
 *
 * Returns number: Cumulative default count.
 *
 * Usage: node Lending2scripts/getUserDefaults.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserDefaults
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserDefaults.js",
  contract: "saturncredit",
  method: "getUserDefaults",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserDefaults",
});
