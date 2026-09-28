#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.cancelListing — write (signed transaction, needs PHANTASMA_WIF)
 * cancelListing(from: address, optionId: number)
 *
 * Option writer cancels a listing that has not yet been bought. Only works
 * while status = 0 (listed).
 *
 * Usage: node Contract11scripts/cancelListing.js <optionId>
 *   optionId (number): The option to cancel.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-cancelListing
 */

const { send } = require("../common");

send({
  file: "Contract11scripts/cancelListing.js",
  contract: "saturnfeeopts",
  method: "cancelListing",
  params: [
    { name: "from", type: "address", desc: "Must be the writer who created the listing." },
    { name: "optionId", type: "number", desc: "The option to cancel." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-cancelListing",
});
