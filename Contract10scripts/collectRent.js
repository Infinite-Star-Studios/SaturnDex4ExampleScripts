#!/usr/bin/env node
"use strict";

/**
 * saturnrental.collectRent — write (signed transaction, needs PHANTASMA_WIF)
 * collectRent(from: address, rentalId: number)
 *
 * Pool provider withdraws rent that the renter has already prepaid. Can be
 * called at any time while the rental is active.
 *
 * Usage: node Contract10scripts/collectRent.js <rentalId>
 *   rentalId (number): An active rental (status 1).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-collectRent
 */

const { send } = require("../common");

send({
  file: "Contract10scripts/collectRent.js",
  contract: "saturnrental",
  method: "collectRent",
  params: [
    { name: "from", type: "address", desc: "Must be the listing owner (pool provider)." },
    { name: "rentalId", type: "number", desc: "An active rental (status 1)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrental-collectRent",
});
