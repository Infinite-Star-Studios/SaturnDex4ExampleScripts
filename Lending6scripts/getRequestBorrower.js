#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestBorrower — read (free, no wallet)
 * getRequestBorrower(reqId: number): address
 *
 * Returns the borrower address that posted this loan request.
 *
 * Returns address: Borrower's wallet address.
 *
 * Usage: node Lending6scripts/getRequestBorrower.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestBorrower
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestBorrower.js",
  contract: "saturnmarket",
  method: "getRequestBorrower",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestBorrower",
});
