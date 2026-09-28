#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalRentCollected — read (free, no wallet)
 * getRentalRentCollected(rentalId: number): number
 *
 * Rent (raw SOUL) the owner has already withdrawn with collectRent() or
 * received at endRental().
 *
 * Returns number: Raw SOUL.
 *
 * Usage: node Contract10scripts/getRentalRentCollected.js <rentalId>
 *   rentalId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalRentCollected
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalRentCollected.js",
  contract: "saturnrental",
  method: "getRentalRentCollected",
  params: [
    { name: "rentalId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalRentCollected",
});
