#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteExpiresAt — read (free, no wallet)
 * getQuoteExpiresAt(qId: number): number
 *
 * Returns the Unix timestamp (seconds) when the quote expires. acceptQuote
 * reverts after this time.
 *
 * Returns number: Unix expiry timestamp.
 *
 * Usage: node Lending6scripts/getQuoteExpiresAt.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteExpiresAt
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteExpiresAt.js",
  contract: "saturnmarket",
  method: "getQuoteExpiresAt",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteExpiresAt",
});
