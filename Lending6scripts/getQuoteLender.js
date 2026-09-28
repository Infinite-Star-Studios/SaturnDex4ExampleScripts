#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteLender — read (free, no wallet)
 * getQuoteLender(qId: number): address
 *
 * Returns the lender address that submitted this quote.
 *
 * Returns address: Lender's wallet address.
 *
 * Usage: node Lending6scripts/getQuoteLender.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteLender
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteLender.js",
  contract: "saturnmarket",
  method: "getQuoteLender",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteLender",
});
