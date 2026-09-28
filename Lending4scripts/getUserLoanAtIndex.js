#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getUserLoanAtIndex — read (free, no wallet)
 * getUserLoanAtIndex(user: address, index: number): number
 *
 * Returns the loan ID at a zero-based index in the borrower's personal loan
 * list. Iterate from 0 to getUserLoanCount(user) - 1 to enumerate all loans
 * for a borrower.
 *
 * Returns number: Loan ID at that index.
 *
 * Usage: node Lending4scripts/getUserLoanAtIndex.js <user> <index>
 *   user (address): Borrower address.
 *   index (number): Zero-based index into the borrower's loan list.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getUserLoanAtIndex
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getUserLoanAtIndex.js",
  contract: "saturnloans",
  method: "getUserLoanAtIndex",
  params: [
    { name: "user", type: "address", desc: "Borrower address." },
    { name: "index", type: "number", desc: "Zero-based index into the borrower's loan list." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getUserLoanAtIndex",
});
