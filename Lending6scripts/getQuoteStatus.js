#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteStatus — read (free, no wallet)
 * getQuoteStatus(qId: number): number
 *
 * Returns the current status of the quote: 1 = pending, 2 = accepted, 4 =
 * withdrawn. A quote stays 1 after it expires and after the borrower accepts
 * another quote; its escrow comes back only through withdrawQuote.
 *
 * Returns number: 1 pending | 2 accepted | 4 withdrawn.
 *
 * Usage: node Lending6scripts/getQuoteStatus.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteStatus
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteStatus.js",
  contract: "saturnmarket",
  method: "getQuoteStatus",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteStatus",
});
