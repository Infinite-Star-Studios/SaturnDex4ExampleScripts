#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalMaxFee — read (free, no wallet)
 * getRentalMaxFee(rentalId: number): number
 *
 * Highest fee (per 10k) the renter may set on the pool while the rental is
 * active.
 *
 * Returns number: Fee per 10,000.
 *
 * Usage: node Contract10scripts/getRentalMaxFee.js <rentalId>
 *   rentalId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalMaxFee
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalMaxFee.js",
  contract: "saturnrental",
  method: "getRentalMaxFee",
  params: [
    { name: "rentalId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalMaxFee",
});
