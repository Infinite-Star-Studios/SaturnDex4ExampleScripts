#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalOperator — read (free, no wallet)
 * getRentalOperator(rentalId: number): address
 *
 * Returns the address currently renting the pool, or @null if the listing has
 * not been rented yet.
 *
 * Returns address: Current renter address, or @null when still in listed
 * state.
 *
 * Usage: node Contract10scripts/getRentalOperator.js <rentalId>
 *   rentalId (number): The rental to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalOperator
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalOperator.js",
  contract: "saturnrental",
  method: "getRentalOperator",
  params: [
    { name: "rentalId", type: "number", desc: "The rental to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalOperator",
});
