#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalDepositAmount — read (free, no wallet)
 * getRentalDepositAmount(rentalId: number): number
 *
 * SOUL deposit the renter must post (raw units); refunded to the renter at
 * endRental().
 *
 * Returns number: Raw SOUL.
 *
 * Usage: node Contract10scripts/getRentalDepositAmount.js <rentalId>
 *   rentalId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalDepositAmount
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalDepositAmount.js",
  contract: "saturnrental",
  method: "getRentalDepositAmount",
  params: [
    { name: "rentalId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalDepositAmount",
});
