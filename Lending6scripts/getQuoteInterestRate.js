#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteInterestRate — read (free, no wallet)
 * getQuoteInterestRate(qId: number): number
 *
 * Returns the annual interest rate offered by the lender, per 10,000 (300 = 3%
 * APR), prorated over the quote's duration.
 *
 * Returns number: Interest rate in basis points.
 *
 * Usage: node Lending6scripts/getQuoteInterestRate.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteInterestRate
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteInterestRate.js",
  contract: "saturnmarket",
  method: "getQuoteInterestRate",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteInterestRate",
});
