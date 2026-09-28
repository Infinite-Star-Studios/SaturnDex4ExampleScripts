#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getUserRequestAtIndex — read (free, no wallet)
 * getUserRequestAtIndex(user: address, index: number): number
 *
 * Returns the requestId at the given zero-based index in the user's personal
 * request list. Iterate from 0 to getUserRequestCount(user)-1 for a full user
 * history.
 *
 * Returns number: Loan request ID at the given index.
 *
 * Usage: node Lending6scripts/getUserRequestAtIndex.js <user> <index>
 *   user (address): Borrower address.
 *   index (number): Zero-based index.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getUserRequestAtIndex
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getUserRequestAtIndex.js",
  contract: "saturnmarket",
  method: "getUserRequestAtIndex",
  params: [
    { name: "user", type: "address", desc: "Borrower address." },
    { name: "index", type: "number", desc: "Zero-based index." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getUserRequestAtIndex",
});
