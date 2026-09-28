#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.cancelListing — write (signed transaction, needs PHANTASMA_WIF)
 * cancelListing(from: address, bondId: number)
 *
 * Cancel a bond listing before any buyer has purchased it. Returns any
 * deposited collateral back to the issuer.
 *
 * Returns void: Success = bond status set to 3 (cancelled).
 *
 * Usage: node Contract9scripts/cancelListing.js <bondId>
 *   bondId (number): Bond to cancel.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-cancelListing
 */

const { send } = require("../common");

send({
  file: "Contract9scripts/cancelListing.js",
  contract: "saturnbonds",
  method: "cancelListing",
  params: [
    { name: "from", type: "address", desc: "Original issuer wallet (must be witness)." },
    { name: "bondId", type: "number", desc: "Bond to cancel." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnbonds-cancelListing",
});
