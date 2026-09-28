#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getNextRequestId — read (free, no wallet)
 * getNextRequestId(): number
 *
 * Returns the ID that will be assigned to the next loan request. Subtract 1 to
 * get the most recently created request ID. Use to paginate all-time listings.
 *
 * Returns number: Next request ID (starts at 1; increments by 1 for each
 * postLoanRequest).
 *
 * Usage: node Lending6scripts/getNextRequestId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getNextRequestId
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getNextRequestId.js",
  contract: "saturnmarket",
  method: "getNextRequestId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getNextRequestId",
});
