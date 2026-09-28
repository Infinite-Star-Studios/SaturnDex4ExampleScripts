#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanLiquidationFlagCumulative — read (free, no wallet)
 * getLoanLiquidationFlagCumulative(loanId: number): number
 *
 * The reference pool's accumulated TAZ-per-RA price at the flag (price × 10^18
 * × seconds), the starting point of the average triggerLiquidation uses.
 *
 * Returns number: Cumulative price at the flag.
 *
 * Usage: node Lending4scripts/getLoanLiquidationFlagCumulative.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationFlagCumulative
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanLiquidationFlagCumulative.js",
  contract: "saturnloans",
  method: "getLoanLiquidationFlagCumulative",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationFlagCumulative",
});
