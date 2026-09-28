#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getListedRentalIds — read (free, no wallet)
 * getListedRentalIds(): number*
 *
 * Yields the ids of rentals in status 0 (listed, available to rent).
 *
 * Returns number*: Stream of rental ids.
 *
 * Usage: node Contract10scripts/getListedRentalIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getListedRentalIds
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getListedRentalIds.js",
  contract: "saturnrental",
  method: "getListedRentalIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getListedRentalIds",
});
