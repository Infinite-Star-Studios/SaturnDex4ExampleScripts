#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteMessage — read (free, no wallet)
 * getQuoteMessage(qId: number): string
 *
 * Returns the lender's optional message attached to the quote.
 *
 * Returns string: Freeform note from the lender. May be empty.
 *
 * Usage: node Lending6scripts/getQuoteMessage.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteMessage
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteMessage.js",
  contract: "saturnmarket",
  method: "getQuoteMessage",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteMessage",
});
