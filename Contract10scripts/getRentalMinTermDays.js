#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalMinTermDays — read (free, no wallet)
 * getRentalMinTermDays(rentalId: number): number
 *
 * Minimum term in days; rentPool() charges this many days of rent up front.
 *
 * Returns number: Days.
 *
 * Usage: node Contract10scripts/getRentalMinTermDays.js <rentalId>
 *   rentalId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalMinTermDays
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalMinTermDays.js",
  contract: "saturnrental",
  method: "getRentalMinTermDays",
  params: [
    { name: "rentalId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalMinTermDays",
});
