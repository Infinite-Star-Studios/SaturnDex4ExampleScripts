#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalOriginalFee — read (free, no wallet)
 * getRentalOriginalFee(rentalId: number): number
 *
 * The pool fee recorded when the rental started; restored by endRental(). 0
 * while unrented.
 *
 * Returns number: Fee per 10,000.
 *
 * Usage: node Contract10scripts/getRentalOriginalFee.js <rentalId>
 *   rentalId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalOriginalFee
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalOriginalFee.js",
  contract: "saturnrental",
  method: "getRentalOriginalFee",
  params: [
    { name: "rentalId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalOriginalFee",
});
