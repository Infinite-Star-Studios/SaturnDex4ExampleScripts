#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalOwner — read (free, no wallet)
 * getRentalOwner(rentalId: number): address
 *
 * Returns the pool provider who listed this rental.
 *
 * Returns address: Listing owner.
 *
 * Usage: node Contract10scripts/getRentalOwner.js <rentalId>
 *   rentalId (number): The rental to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalOwner
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalOwner.js",
  contract: "saturnrental",
  method: "getRentalOwner",
  params: [
    { name: "rentalId", type: "number", desc: "The rental to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalOwner",
});
