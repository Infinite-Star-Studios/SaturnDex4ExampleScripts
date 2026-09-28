#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteColType — read (free, no wallet)
 * getQuoteColType(qId: number): number
 *
 * Returns the collateral type the lender is demanding. It is always 2 (the
 * request's own v4 pool): types 1 and 3 are refused at quote time.
 *
 * Returns number: 2 = v4 LP pool, 3 = v3 LP NFT.
 *
 * Usage: node Lending6scripts/getQuoteColType.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteColType
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteColType.js",
  contract: "saturnmarket",
  method: "getQuoteColType",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteColType",
});
