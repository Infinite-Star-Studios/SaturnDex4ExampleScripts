#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralOwner — read (free, no wallet)
 * getCollateralOwner(colId: number): address
 *
 * Returns the borrower address that deposited this collateral position.
 *
 * Returns address: Address of the depositing borrower.
 *
 * Usage: node Lending3scripts/getCollateralOwner.js <colId>
 *   colId (number): Collateral position ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralOwner
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralOwner.js",
  contract: "saturnvault",
  method: "getCollateralOwner",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralOwner",
});
