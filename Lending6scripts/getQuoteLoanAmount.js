#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteLoanAmount — read (free, no wallet)
 * getQuoteLoanAmount(qId: number): number
 *
 * Returns the raw-unit loan amount the lender is offering (and has escrowed).
 * This amount minus the origination fee is what the borrower actually
 * receives.
 *
 * Returns number: Escrowed loan amount in raw token units.
 *
 * Usage: node Lending6scripts/getQuoteLoanAmount.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteLoanAmount
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteLoanAmount.js",
  contract: "saturnmarket",
  method: "getQuoteLoanAmount",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteLoanAmount",
});
