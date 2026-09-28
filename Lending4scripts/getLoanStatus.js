#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanStatus — read (free, no wallet)
 * getLoanStatus(loanId: number): number
 *
 * Returns the current status code: 1 = active, 2 = repaid, 3 = defaulted, 4 =
 * liquidated. Note: triggerDefault() moves through 3 → 4 atomically, so 3 is
 * transient and rarely observed by polling.
 *
 * Returns number: 1 active | 2 repaid | 3 defaulted | 4 liquidated.
 *
 * Usage: node Lending4scripts/getLoanStatus.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanStatus
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanStatus.js",
  contract: "saturnloans",
  method: "getLoanStatus",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanStatus",
});
