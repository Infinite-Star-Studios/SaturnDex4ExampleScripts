#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanLiquidationFlagReference — read (free, no wallet)
 * getLoanLiquidationFlagReference(loanId: number): number
 *
 * The reference pool id stored with the flag. 0 means a flag from before
 * 1.0.2, which triggerLiquidation refuses (re-flag).
 *
 * Returns number: Pool ID, or 0.
 *
 * Usage: node Lending4scripts/getLoanLiquidationFlagReference.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationFlagReference
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanLiquidationFlagReference.js",
  contract: "saturnloans",
  method: "getLoanLiquidationFlagReference",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanLiquidationFlagReference",
});
