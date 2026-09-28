#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestAcceptedQuoteId — read (free, no wallet)
 * getRequestAcceptedQuoteId(reqId: number): number
 *
 * Returns the ID of the quote that was accepted to open the loan. Only
 * meaningful when request status is 2 (accepted).
 *
 * Returns number: Accepted quote ID, or 0 if no quote has been accepted yet.
 *
 * Usage: node Lending6scripts/getRequestAcceptedQuoteId.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestAcceptedQuoteId
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestAcceptedQuoteId.js",
  contract: "saturnmarket",
  method: "getRequestAcceptedQuoteId",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestAcceptedQuoteId",
});
