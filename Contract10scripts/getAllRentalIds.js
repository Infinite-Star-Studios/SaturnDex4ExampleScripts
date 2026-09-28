#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getAllRentalIds — read (free, no wallet)
 * getAllRentalIds(): number*
 *
 * Generator yielding the ids of rentals that are still open: listed (status 0)
 * or rented (status 1). cancelListing() and endRental() remove the id. Walk 1
 * .. getNextRentalId() − 1 to reach closed rentals.
 *
 * Returns number*: Iterable of rental IDs.
 *
 * Usage: node Contract10scripts/getAllRentalIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getAllRentalIds
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getAllRentalIds.js",
  contract: "saturnrental",
  method: "getAllRentalIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getAllRentalIds",
});
