#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getActiveRentalIds — read (free, no wallet)
 * getActiveRentalIds(): number*
 *
 * Yields the ids of rentals in status 1 (rented).
 *
 * Returns number*: Stream of rental ids.
 *
 * Usage: node Contract10scripts/getActiveRentalIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getActiveRentalIds
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getActiveRentalIds.js",
  contract: "saturnrental",
  method: "getActiveRentalIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getActiveRentalIds",
});
