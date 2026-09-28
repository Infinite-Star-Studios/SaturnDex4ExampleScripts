#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanLiquidationTriggeredAt — read (free, no wallet)
 * getLoanLiquidationTriggeredAt(loanId: number): number
 *
 * When the loan was liquidated or defaulted (unix seconds); 0 otherwise.
 *
 * Returns number: Unix seconds, or 0.
 *
 * Usage: node Lending4scripts/getLoanLiquidationTriggeredAt.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationTriggeredAt
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanLiquidationTriggeredAt.js",
  contract: "saturnloans",
  method: "getLoanLiquidationTriggeredAt",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationTriggeredAt",
});
