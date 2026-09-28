#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLenderLoanAtIndex — read (free, no wallet)
 * getLenderLoanAtIndex(lender: address, index: number): number
 *
 * Returns the loan ID at a zero-based index in the lender's loan list. Iterate
 * from 0 to getLenderLoanCount(lender) - 1 to build a lender portfolio view.
 *
 * Returns number: Loan ID at that index.
 *
 * Usage: node Lending4scripts/getLenderLoanAtIndex.js <lender> <index>
 *   lender (address): Lender address.
 *   index (number): Zero-based index into the lender's loan list.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLenderLoanAtIndex
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLenderLoanAtIndex.js",
  contract: "saturnloans",
  method: "getLenderLoanAtIndex",
  params: [
    { name: "lender", type: "address", desc: "Lender address." },
    { name: "index", type: "number", desc: "Zero-based index into the lender's loan list." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLenderLoanAtIndex",
});
