#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestQuoteAtIndex — read (free, no wallet)
 * getRequestQuoteAtIndex(requestId: number, index: number): number
 *
 * Returns the quoteId at a given index within the quote list for a specific
 * request. Iterate from 0 to getRequestQuoteCount(requestId)-1 to enumerate
 * all quotes on a request.
 *
 * Returns number: Quote ID at the given index.
 *
 * Usage: node Lending6scripts/getRequestQuoteAtIndex.js <requestId> <index>
 *   requestId (number): Loan request ID.
 *   index (number): Zero-based index into the request's quote list.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestQuoteAtIndex
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestQuoteAtIndex.js",
  contract: "saturnmarket",
  method: "getRequestQuoteAtIndex",
  params: [
    { name: "requestId", type: "number", desc: "Loan request ID." },
    { name: "index", type: "number", desc: "Zero-based index into the request's quote list." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestQuoteAtIndex",
});
