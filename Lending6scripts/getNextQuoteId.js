#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getNextQuoteId — read (free, no wallet)
 * getNextQuoteId(): number
 *
 * Returns the ID that will be assigned to the next submitted quote. Use
 * alongside getNextRequestId to enumerate all market activity.
 *
 * Returns number: Next quote ID (starts at 1; increments by 1 for each
 * submitQuote).
 *
 * Usage: node Lending6scripts/getNextQuoteId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getNextQuoteId
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getNextQuoteId.js",
  contract: "saturnmarket",
  method: "getNextQuoteId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getNextQuoteId",
});
