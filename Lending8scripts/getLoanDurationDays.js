#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getLoanDurationDays — read (free, no wallet)
 * getLoanDurationDays(loanId: number): number
 *
 * Returns the duration (in days) of the loan, snapshotted at creation time.
 * Since 1.2 it only caps the elapsed days the reward counts.
 *
 * Returns number: Loan duration in days as recorded at creation.
 *
 * Usage: node Lending8scripts/getLoanDurationDays.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getLoanDurationDays
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getLoanDurationDays.js",
  contract: "saturntaz",
  method: "getLoanDurationDays",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getLoanDurationDays",
});
