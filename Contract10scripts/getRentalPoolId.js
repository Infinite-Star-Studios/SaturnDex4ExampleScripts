#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getRentalPoolId — read (free, no wallet)
 * getRentalPoolId(rentalId: number): number
 *
 * Returns the poolId this rental is attached to.
 *
 * Returns number: Underlying pool ID.
 *
 * Usage: node Contract10scripts/getRentalPoolId.js <rentalId>
 *   rentalId (number): The rental to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getRentalPoolId
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getRentalPoolId.js",
  contract: "saturnrental",
  method: "getRentalPoolId",
  params: [
    { name: "rentalId", type: "number", desc: "The rental to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getRentalPoolId",
});
