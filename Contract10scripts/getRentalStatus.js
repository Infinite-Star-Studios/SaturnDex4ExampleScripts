#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalStatus — read (free, no wallet)
 * getRentalStatus(rentalId: number): number
 *
 * Returns the lifecycle status code.
 *
 * Returns number: 0=listed, 1=rented, 2=ended, 3=cancelled.
 *
 * Usage: node Contract10scripts/getRentalStatus.js <rentalId>
 *   rentalId (number): The rental to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalStatus
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalStatus.js",
  contract: "saturnrental",
  method: "getRentalStatus",
  params: [
    { name: "rentalId", type: "number", desc: "The rental to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalStatus",
});
