#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getUserQuoteAtIndex — read (free, no wallet)
 * getUserQuoteAtIndex(user: address, index: number): number
 *
 * Returns the quoteId at the given zero-based index in the lender's personal
 * quote list. Iterate from 0 to getUserQuoteCount(user)-1 for a full lender
 * quote history.
 *
 * Returns number: Quote ID at the given index.
 *
 * Usage: node Lending6scripts/getUserQuoteAtIndex.js <user> <index>
 *   user (address): Lender address.
 *   index (number): Zero-based index.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getUserQuoteAtIndex
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getUserQuoteAtIndex.js",
  contract: "saturnmarket",
  method: "getUserQuoteAtIndex",
  params: [
    { name: "user", type: "address", desc: "Lender address." },
    { name: "index", type: "number", desc: "Zero-based index." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getUserQuoteAtIndex",
});
