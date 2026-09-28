#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteRequestId — read (free, no wallet)
 * getQuoteRequestId(qId: number): number
 *
 * Returns the loan request ID that this quote is responding to.
 *
 * Returns number: Parent request ID.
 *
 * Usage: node Lending6scripts/getQuoteRequestId.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteRequestId
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteRequestId.js",
  contract: "saturnmarket",
  method: "getQuoteRequestId",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteRequestId",
});
