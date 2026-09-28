#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteColTokenAmount — read (free, no wallet)
 * getQuoteColTokenAmount(qId: number): number
 *
 * Returns the collateral token amount required (type 1 only). 0 for types 2
 * and 3.
 *
 * Returns number: Required collateral amount in raw token units; 0 for LP
 * types.
 *
 * Usage: node Lending6scripts/getQuoteColTokenAmount.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteColTokenAmount
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteColTokenAmount.js",
  contract: "saturnmarket",
  method: "getQuoteColTokenAmount",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteColTokenAmount",
});
