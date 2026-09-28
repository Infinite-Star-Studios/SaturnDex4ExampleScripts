#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestQuoteCount — read (free, no wallet)
 * getRequestQuoteCount(reqId: number): number
 *
 * Returns how many quotes have been submitted for this request. Combine with
 * getRequestQuoteAtIndex to iterate them.
 *
 * Returns number: Total quote count for this request (includes withdrawn
 * quotes).
 *
 * Usage: node Lending6scripts/getRequestQuoteCount.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestQuoteCount
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestQuoteCount.js",
  contract: "saturnmarket",
  method: "getRequestQuoteCount",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestQuoteCount",
});
