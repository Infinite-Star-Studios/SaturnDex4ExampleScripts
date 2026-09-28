#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalMinFee — read (free, no wallet)
 * getRentalMinFee(rentalId: number): number
 *
 * Lowest fee (per 10k) the renter may set on the pool while the rental is
 * active.
 *
 * Returns number: Fee per 10,000.
 *
 * Usage: node Contract10scripts/getRentalMinFee.js <rentalId>
 *   rentalId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalMinFee
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalMinFee.js",
  contract: "saturnrental",
  method: "getRentalMinFee",
  params: [
    { name: "rentalId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalMinFee",
});
