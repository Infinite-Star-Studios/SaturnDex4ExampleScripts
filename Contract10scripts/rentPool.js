#!/usr/bin/env node
"use strict";

/**
 * saturnrental.rentPool — write (signed transaction, needs PHANTASMA_WIF)
 * rentPool(from: address, rentalId: number)
 *
 * Renter takes the listing. Pays deposit + (dailyRate * minTermDays) in raw
 * SOUL, gains fee control, and the pool's fee redirect is turned on in
 * saturnfees: from now on the pool's provider fees (plus any the owner left
 * unclaimed) can be claimed only by the renter. The pool's live fee is
 * recorded as getRentalOriginalFee() and restored by endRental(). The live
 * pool is checked again first, since listings do not lock it.
 *
 * Usage: node Contract10scripts/rentPool.js <rentalId>
 *   rentalId (number): A listing in status 0 (listed).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-rentPool
 */

const { send } = require("../common");

send({
  file: "Contract10scripts/rentPool.js",
  contract: "saturnrental",
  method: "rentPool",
  params: [
    { name: "from", type: "address", desc: "Renter — cannot be the pool provider. Must be a transaction witness." },
    { name: "rentalId", type: "number", desc: "A listing in status 0 (listed)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrental-rentPool",
});
