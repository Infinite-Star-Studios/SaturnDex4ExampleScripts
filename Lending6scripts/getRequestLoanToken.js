#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestLoanToken — read (free, no wallet)
 * getRequestLoanToken(reqId: number): string
 *
 * Returns the token symbol the borrower wants to borrow (TAZ in v1.0).
 *
 * Returns string: Token symbol, e.g. "TAZ".
 *
 * Usage: node Lending6scripts/getRequestLoanToken.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestLoanToken
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestLoanToken.js",
  contract: "saturnmarket",
  method: "getRequestLoanToken",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestLoanToken",
});
