#!/usr/bin/env node
"use strict";

/**
 * saturnrental.extendRental — write (signed transaction, needs PHANTASMA_WIF)
 * extendRental(from: address, rentalId: number, additionalDays: number)
 *
 * Renter prepays additional days. The new paid-through time is the old one +
 * additionalDays × 86,400 s, not now + additionalDays, so days that have
 * already passed are paid for too. There is no deadline: it also works after
 * paidThroughTime has passed, as long as the rental has not been ended and the
 * new paid-through time stays within getRentalHardCapTime(). Extend before
 * expiry to keep adjustFee() working and to stop either party from calling
 * endRental().
 *
 * Usage: node Contract10scripts/extendRental.js <rentalId> <additionalDays>
 *   rentalId (number): An active rental (status 1).
 *   additionalDays (number): Extra days to prepay. Must be >= 1.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-extendRental
 */

const { send } = require("../common");

send({
  file: "Contract10scripts/extendRental.js",
  contract: "saturnrental",
  method: "extendRental",
  params: [
    { name: "from", type: "address", desc: "Must be the current renter." },
    { name: "rentalId", type: "number", desc: "An active rental (status 1)." },
    { name: "additionalDays", type: "number", desc: "Extra days to prepay. Must be >= 1." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrental-extendRental",
});
