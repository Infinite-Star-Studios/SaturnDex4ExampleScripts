#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralLoanId — read (free, no wallet)
 * getCollateralLoanId(colId: number): number
 *
 * Returns the loan ID this collateral is linked to, or 0 if the position is
 * not yet linked to any loan. A position may be deposited before a loan is
 * formally opened.
 *
 * Returns number: Linked loan ID, or 0 if unlinked.
 *
 * Usage: node Lending3scripts/getCollateralLoanId.js <colId>
 *   colId (number): Collateral position ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralLoanId
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralLoanId.js",
  contract: "saturnvault",
  method: "getCollateralLoanId",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralLoanId",
});
