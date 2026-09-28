#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalStartTime — read (free, no wallet)
 * getRentalStartTime(rentalId: number): number
 *
 * Unix time rentPool() was called; 0 while the listing is unrented.
 *
 * Returns number: Unix seconds or 0.
 *
 * Usage: node Contract10scripts/getRentalStartTime.js <rentalId>
 *   rentalId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalStartTime
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalStartTime.js",
  contract: "saturnrental",
  method: "getRentalStartTime",
  params: [
    { name: "rentalId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalStartTime",
});
