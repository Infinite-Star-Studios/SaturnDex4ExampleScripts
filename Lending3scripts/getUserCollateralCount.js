#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getUserCollateralCount — read (free, no wallet)
 * getUserCollateralCount(user: address): number
 *
 * Returns how many collateral positions a user has ever deposited (all
 * statuses: locked, released, and liquidated). Use this as the loop bound when
 * calling getUserCollateralAtIndex to enumerate a borrower's full collateral
 * history.
 *
 * Returns number: Total collateral positions registered for this user.
 *
 * Usage: node Lending3scripts/getUserCollateralCount.js <user>
 *   user (address): Borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getUserCollateralCount
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getUserCollateralCount.js",
  contract: "saturnvault",
  method: "getUserCollateralCount",
  params: [
    { name: "user", type: "address", desc: "Borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getUserCollateralCount",
});
