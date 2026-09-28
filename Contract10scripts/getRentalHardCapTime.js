#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalHardCapTime — read (free, no wallet)
 * getRentalHardCapTime(rentalId: number): number
 *
 * start + maxTermDays * 86400: the latest paid-through time any extension may
 * reach. 0 while the listing is unrented.
 *
 * Returns number: Unix seconds or 0.
 *
 * Usage: node Contract10scripts/getRentalHardCapTime.js <rentalId>
 *   rentalId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalHardCapTime
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalHardCapTime.js",
  contract: "saturnrental",
  method: "getRentalHardCapTime",
  params: [
    { name: "rentalId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalHardCapTime",
});
