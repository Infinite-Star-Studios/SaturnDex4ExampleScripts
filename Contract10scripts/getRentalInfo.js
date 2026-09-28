#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalInfo — read (free, no wallet)
 * getRentalInfo(rentalId: number): string
 *
 * One-shot status snapshot used by marketplace UIs. Returns an
 * underscore-delimited string with the key fields.
 *
 * Returns string:
 * pool:<poolId>_rate:<dailyRate>_deposit:<deposit>_minFee:<minFee>_maxFee:<maxFee>_origFee:<originalFee>_minTerm:<days>_maxTerm:<days>_status:<status>_paidThrough:<paidThrough>
 *
 * Usage: node Contract10scripts/getRentalInfo.js <rentalId>
 *   rentalId (number): The rental to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalInfo
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalInfo.js",
  contract: "saturnrental",
  method: "getRentalInfo",
  params: [
    { name: "rentalId", type: "number", desc: "The rental to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalInfo",
});
