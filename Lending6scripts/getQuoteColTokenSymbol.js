#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteColTokenSymbol — read (free, no wallet)
 * getQuoteColTokenSymbol(qId: number): string
 *
 * Returns the token symbol the lender requires as collateral (type 1 only).
 * Empty for types 2 and 3.
 *
 * Returns string: Collateral token symbol for type-1 quotes; empty otherwise.
 *
 * Usage: node Lending6scripts/getQuoteColTokenSymbol.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteColTokenSymbol
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteColTokenSymbol.js",
  contract: "saturnmarket",
  method: "getQuoteColTokenSymbol",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteColTokenSymbol",
});
