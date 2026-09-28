#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteDuration — read (free, no wallet)
 * getQuoteDuration(qId: number): number
 *
 * Returns the loan term in seconds proposed by the lender.
 *
 * Returns number: Loan duration in seconds.
 *
 * Usage: node Lending6scripts/getQuoteDuration.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteDuration
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteDuration.js",
  contract: "saturnmarket",
  method: "getQuoteDuration",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteDuration",
});
