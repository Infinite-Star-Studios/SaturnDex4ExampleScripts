#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteColDexVersion — read (free, no wallet)
 * getQuoteColDexVersion(qId: number): number
 *
 * Returns the DEX version used to price the type-1 collateral. 0 for types 2
 * and 3.
 *
 * Returns number: 1 = V3, 2 = V4, or 0 for LP collateral types.
 *
 * Usage: node Lending6scripts/getQuoteColDexVersion.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteColDexVersion
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteColDexVersion.js",
  contract: "saturnmarket",
  method: "getQuoteColDexVersion",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteColDexVersion",
});
