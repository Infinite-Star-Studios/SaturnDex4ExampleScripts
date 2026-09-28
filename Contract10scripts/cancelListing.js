#!/usr/bin/env node
"use strict";

/**
 * saturnrental.cancelListing — write (signed transaction, needs PHANTASMA_WIF)
 * cancelListing(from: address, rentalId: number)
 *
 * Pool provider cancels a listing that has not yet been rented. Only works
 * while status = 0 (listed).
 *
 * Usage: node Contract10scripts/cancelListing.js <rentalId>
 *   rentalId (number): The rental to cancel.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-cancelListing
 */

const { send } = require("../common");

send({
  file: "Contract10scripts/cancelListing.js",
  contract: "saturnrental",
  method: "cancelListing",
  params: [
    { name: "from", type: "address", desc: "Must be the provider who created the listing." },
    { name: "rentalId", type: "number", desc: "The rental to cancel." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrental-cancelListing",
});
