#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteCreatedAt — read (free, no wallet)
 * getQuoteCreatedAt(qId: number): number
 *
 * Returns the Unix timestamp (seconds) when the quote was submitted.
 *
 * Returns number: Unix timestamp of quote creation.
 *
 * Usage: node Lending6scripts/getQuoteCreatedAt.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteCreatedAt
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteCreatedAt.js",
  contract: "saturnmarket",
  method: "getQuoteCreatedAt",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteCreatedAt",
});
