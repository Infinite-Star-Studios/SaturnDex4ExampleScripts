#!/usr/bin/env node
"use strict";

/**
 * saturnrental.endRental — write (signed transaction, needs PHANTASMA_WIF)
 * endRental(from: address, rentalId: number)
 *
 * Either party settles the rental once the paid-through time has passed.
 * Finalizes fees to the renter, pays remaining rent to the owner, refunds the
 * deposit, restores the original fee rate, and unlocks the pool.
 *
 * Usage: node Contract10scripts/endRental.js <rentalId>
 *   rentalId (number): An active rental whose paidThroughTime has elapsed.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-endRental
 */

const { send } = require("../common");

send({
  file: "Contract10scripts/endRental.js",
  contract: "saturnrental",
  method: "endRental",
  params: [
    { name: "from", type: "address", desc: "Must be either the owner or the renter." },
    { name: "rentalId", type: "number", desc: "An active rental whose paidThroughTime has elapsed." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrental-endRental",
});
