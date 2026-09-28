#!/usr/bin/env node
"use strict";

/**
 * saturnrental.claimRentalFees — write (signed transaction, needs PHANTASMA_WIF)
 * claimRentalFees(from: address, rentalId: number)
 *
 * Renter harvests the swap fees accumulated on both sides of the pool while
 * the rental has been active.
 *
 * Usage: node Contract10scripts/claimRentalFees.js <rentalId>
 *   rentalId (number): An active rental (status 1).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-claimRentalFees
 */

const { send } = require("../common");

send({
  file: "Contract10scripts/claimRentalFees.js",
  contract: "saturnrental",
  method: "claimRentalFees",
  params: [
    { name: "from", type: "address", desc: "Must be the current renter." },
    { name: "rentalId", type: "number", desc: "An active rental (status 1)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrental-claimRentalFees",
});
