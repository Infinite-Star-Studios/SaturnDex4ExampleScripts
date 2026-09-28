#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalPaidThroughTime — read (free, no wallet)
 * getRentalPaidThroughTime(rentalId: number): number
 *
 * Unix timestamp up to which rent has been prepaid. endRental cannot be called
 * before this time.
 *
 * Returns number: Unix seconds.
 *
 * Usage: node Contract10scripts/getRentalPaidThroughTime.js <rentalId>
 *   rentalId (number): The rental to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalPaidThroughTime
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalPaidThroughTime.js",
  contract: "saturnrental",
  method: "getRentalPaidThroughTime",
  params: [
    { name: "rentalId", type: "number", desc: "The rental to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalPaidThroughTime",
});
