#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getUserCollateralAtIndex — read (free, no wallet)
 * getUserCollateralAtIndex(user: address, index: number): number
 *
 * Returns the collateral ID at a specific index in a user's collateral list.
 * Indexes are 0-based and ordered by deposit time. Combine with
 * getUserCollateralCount to page through a borrower's complete collateral
 * history.
 *
 * Returns number: Collateral position ID at the given index.
 *
 * Usage: node Lending3scripts/getUserCollateralAtIndex.js <user> <index>
 *   user (address): Borrower's address.
 *   index (number): 0-based index into the user's collateral list.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getUserCollateralAtIndex
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getUserCollateralAtIndex.js",
  contract: "saturnvault",
  method: "getUserCollateralAtIndex",
  params: [
    { name: "user", type: "address", desc: "Borrower's address." },
    { name: "index", type: "number", desc: "0-based index into the user's collateral list." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getUserCollateralAtIndex",
});
