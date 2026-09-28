#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getNextRentalId — read (free, no wallet)
 * getNextRentalId(): number
 *
 * Returns the rentalId that will be assigned to the next listing.
 *
 * Returns number: Next rental ID (starts at 1).
 *
 * Usage: node Contract10scripts/getNextRentalId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getNextRentalId
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getNextRentalId.js",
  contract: "saturnrental",
  method: "getNextRentalId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getNextRentalId",
});
