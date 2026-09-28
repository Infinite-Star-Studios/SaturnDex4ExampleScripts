#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteColPoolId — read (free, no wallet)
 * getQuoteColPoolId(qId: number): number
 *
 * Returns the specific v4 pool ID the lender requires as collateral (type 2).
 * 0 for types 1 and 3.
 *
 * Returns number: Required v4 pool ID; 0 if not a pool-collateral quote.
 *
 * Usage: node Lending6scripts/getQuoteColPoolId.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteColPoolId
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteColPoolId.js",
  contract: "saturnmarket",
  method: "getQuoteColPoolId",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteColPoolId",
});
