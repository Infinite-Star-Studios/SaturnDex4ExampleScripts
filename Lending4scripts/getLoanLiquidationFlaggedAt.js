#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanLiquidationFlaggedAt — read (free, no wallet)
 * getLoanLiquidationFlaggedAt(loanId: number): number
 *
 * Unix time of the lender's last flagLiquidation on this loan, 0 if never
 * flagged.
 *
 * Returns number: Unix seconds, or 0.
 *
 * Usage: node Lending4scripts/getLoanLiquidationFlaggedAt.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationFlaggedAt
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanLiquidationFlaggedAt.js",
  contract: "saturnloans",
  method: "getLoanLiquidationFlaggedAt",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationFlaggedAt",
});
