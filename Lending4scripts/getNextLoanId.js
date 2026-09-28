#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getNextLoanId — read (free, no wallet)
 * getNextLoanId(): number
 *
 * Returns the ID that will be assigned to the next loan created. Loan IDs are
 * monotonically incremented from 1, so this equals totalLoansEverCreated + 1.
 *
 * Returns number: Next loan ID to be issued.
 *
 * Usage: node Lending4scripts/getNextLoanId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getNextLoanId
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getNextLoanId.js",
  contract: "saturnloans",
  method: "getNextLoanId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getNextLoanId",
});
