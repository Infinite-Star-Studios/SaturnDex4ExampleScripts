#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanDueDate — read (free, no wallet)
 * getLoanDueDate(loanId: number): number
 *
 * Returns the Unix timestamp when the full balance is due (createdAt +
 * duration). After this date plus the grace period, triggerDefault() may be
 * called.
 *
 * Returns number: Due-date timestamp in seconds.
 *
 * Usage: node Lending4scripts/getLoanDueDate.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanDueDate
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanDueDate.js",
  contract: "saturnloans",
  method: "getLoanDueDate",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanDueDate",
});
