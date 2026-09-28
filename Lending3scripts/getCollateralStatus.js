#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralStatus — read (free, no wallet)
 * getCollateralStatus(colId: number): number
 *
 * Returns the lifecycle status of the collateral: 1 = locked (active), 2 =
 * released (returned to borrower on repayment), 3 = liquidated (transferred to
 * lender after default).
 *
 * Returns number: 1 = locked, 2 = released, 3 = liquidated.
 *
 * Usage: node Lending3scripts/getCollateralStatus.js <colId>
 *   colId (number): Collateral position ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralStatus
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralStatus.js",
  contract: "saturnvault",
  method: "getCollateralStatus",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralStatus",
});
