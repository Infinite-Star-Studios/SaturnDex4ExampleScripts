#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanCollateralId — read (free, no wallet)
 * getLoanCollateralId(loanId: number): number
 *
 * Returns the collateral ID in saturnvault linked to this loan. Pass this ID
 * to saturnvault view methods to inspect collateral type, value, and status.
 *
 * Returns number: Collateral entry ID in saturnvault.
 *
 * Usage: node Lending4scripts/getLoanCollateralId.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanCollateralId
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanCollateralId.js",
  contract: "saturnloans",
  method: "getLoanCollateralId",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanCollateralId",
});
