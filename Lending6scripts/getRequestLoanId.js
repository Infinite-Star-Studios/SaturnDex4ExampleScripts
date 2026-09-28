#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestLoanId — read (free, no wallet)
 * getRequestLoanId(reqId: number): number
 *
 * Returns the saturnloans loanId created when this request was accepted. Use
 * to link from the marketplace entry to the live loan in saturnloans. Only set
 * after status becomes 2.
 *
 * Returns number: Loan ID in saturnloans, or 0 if not yet accepted.
 *
 * Usage: node Lending6scripts/getRequestLoanId.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestLoanId
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestLoanId.js",
  contract: "saturnmarket",
  method: "getRequestLoanId",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestLoanId",
});
