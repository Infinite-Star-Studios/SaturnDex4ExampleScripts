#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestLoanDexVersion — read (free, no wallet)
 * getRequestLoanDexVersion(reqId: number): number
 *
 * Returns which DEX (1 = V3, 2 = V4) is used to price the loan token against
 * RA.
 *
 * Returns number: 1 = V3, 2 = V4.
 *
 * Usage: node Lending6scripts/getRequestLoanDexVersion.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestLoanDexVersion
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestLoanDexVersion.js",
  contract: "saturnmarket",
  method: "getRequestLoanDexVersion",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestLoanDexVersion",
});
