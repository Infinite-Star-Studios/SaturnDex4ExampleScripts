#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalMaxTermDays — read (free, no wallet)
 * getRentalMaxTermDays(rentalId: number): number
 *
 * Maximum term in days from the rental start; extendRental() cannot push
 * paidThroughTime past it.
 *
 * Returns number: Days.
 *
 * Usage: node Contract10scripts/getRentalMaxTermDays.js <rentalId>
 *   rentalId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalMaxTermDays
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalMaxTermDays.js",
  contract: "saturnrental",
  method: "getRentalMaxTermDays",
  params: [
    { name: "rentalId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalMaxTermDays",
});
