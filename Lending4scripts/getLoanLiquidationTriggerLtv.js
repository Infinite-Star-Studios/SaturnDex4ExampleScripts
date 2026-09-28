#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanLiquidationTriggerLtv — read (free, no wallet)
 * getLoanLiquidationTriggerLtv(loanId: number): number
 *
 * The time-weighted LTV (per 10,000) triggerLiquidation decided on; 0 for a
 * loan it never liquidated (and for a default).
 *
 * Returns number: LTV per 10,000, or 0.
 *
 * Usage: node Lending4scripts/getLoanLiquidationTriggerLtv.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationTriggerLtv
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanLiquidationTriggerLtv.js",
  contract: "saturnloans",
  method: "getLoanLiquidationTriggerLtv",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationTriggerLtv",
});
