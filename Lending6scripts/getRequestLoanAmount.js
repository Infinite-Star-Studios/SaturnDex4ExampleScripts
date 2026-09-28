#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestLoanAmount — read (free, no wallet)
 * getRequestLoanAmount(reqId: number): number
 *
 * Returns the raw-unit amount of the loan token the borrower is requesting.
 *
 * Returns number: Requested loan amount in raw token units.
 *
 * Usage: node Lending6scripts/getRequestLoanAmount.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestLoanAmount
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestLoanAmount.js",
  contract: "saturnmarket",
  method: "getRequestLoanAmount",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestLoanAmount",
});
