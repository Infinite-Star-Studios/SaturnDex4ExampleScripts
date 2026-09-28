#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteColNftId — read (free, no wallet)
 * getQuoteColNftId(qId: number): number
 *
 * Returns the specific v3 LP NFT ID the lender requires as collateral (type
 * 3). 0 for types 1 and 2.
 *
 * Returns number: Required v3 LP NFT ID; 0 if not an NFT-collateral quote.
 *
 * Usage: node Lending6scripts/getQuoteColNftId.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteColNftId
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteColNftId.js",
  contract: "saturnmarket",
  method: "getQuoteColNftId",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteColNftId",
});
