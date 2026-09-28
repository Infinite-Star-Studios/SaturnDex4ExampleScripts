#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.expireListing — write (signed transaction, needs PHANTASMA_WIF)
 * expireListing(from: address, bondId: number)
 *
 * Anyone can retire a bond listing that has sat unsold for 30 days. The bond
 * moves to status 4 (expired), leaves the id lists, and any hybrid-mode
 * collateral is returned to the issuer. Keeps the marketplace free of stale
 * offers without needing the issuer.
 *
 * Usage: node Contract9scripts/expireListing.js <bondId>
 *   bondId (number): Listed bond to expire.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-expireListing
 */

const { send } = require("../common");

send({
  file: "Contract9scripts/expireListing.js",
  contract: "saturnbonds",
  method: "expireListing",
  params: [
    { name: "from", type: "address", desc: "Any wallet (must be the transaction witness)." },
    { name: "bondId", type: "number", desc: "Listed bond to expire." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnbonds-expireListing",
});
