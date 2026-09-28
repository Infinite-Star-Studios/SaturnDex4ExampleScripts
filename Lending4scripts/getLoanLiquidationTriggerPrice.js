#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanLiquidationTriggerPrice — read (free, no wallet)
 * getLoanLiquidationTriggerPrice(loanId: number): number
 *
 * The average TAZ-per-RA price (× 10^18) triggerLiquidation decided on; 0 for
 * a loan it never liquidated (and for a default).
 *
 * Returns number: Price × 10^18, or 0.
 *
 * Usage: node Lending4scripts/getLoanLiquidationTriggerPrice.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationTriggerPrice
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanLiquidationTriggerPrice.js",
  contract: "saturnloans",
  method: "getLoanLiquidationTriggerPrice",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationTriggerPrice",
});
