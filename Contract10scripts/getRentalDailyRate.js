#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalDailyRate — read (free, no wallet)
 * getRentalDailyRate(rentalId: number): number
 *
 * Returns the daily rent, in raw SOUL.
 *
 * Returns number: SOUL per day.
 *
 * Usage: node Contract10scripts/getRentalDailyRate.js <rentalId>
 *   rentalId (number): The rental to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalDailyRate
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalDailyRate.js",
  contract: "saturnrental",
  method: "getRentalDailyRate",
  params: [
    { name: "rentalId", type: "number", desc: "The rental to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalDailyRate",
});
