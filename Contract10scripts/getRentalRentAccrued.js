#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalRentAccrued — read (free, no wallet)
 * getRentalRentAccrued(rentalId: number): number
 *
 * Total rent (raw SOUL) the renter has prepaid so far — the initial term plus
 * every extension. The owner's collectable balance is this minus
 * getRentalRentCollected().
 *
 * Returns number: Raw SOUL.
 *
 * Usage: node Contract10scripts/getRentalRentAccrued.js <rentalId>
 *   rentalId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalRentAccrued
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalRentAccrued.js",
  contract: "saturnrental",
  method: "getRentalRentAccrued",
  params: [
    { name: "rentalId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalRentAccrued",
});
