#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestMaxInterestRate — read (free, no wallet)
 * getRequestMaxInterestRate(reqId: number): number
 *
 * Returns the maximum interest rate (basis points) the borrower is willing to
 * accept. Use to filter out quotes above this threshold in your lender UI.
 *
 * Returns number: Max interest rate in basis points.
 *
 * Usage: node Lending6scripts/getRequestMaxInterestRate.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestMaxInterestRate
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestMaxInterestRate.js",
  contract: "saturnmarket",
  method: "getRequestMaxInterestRate",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestMaxInterestRate",
});
