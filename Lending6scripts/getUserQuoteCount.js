#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getUserQuoteCount — read (free, no wallet)
 * getUserQuoteCount(user: address): number
 *
 * Returns the total number of quotes ever submitted by this lender address
 * (includes withdrawn ones). Use as the upper bound when iterating
 * getUserQuoteAtIndex.
 *
 * Returns number: Total quote count for this lender.
 *
 * Usage: node Lending6scripts/getUserQuoteCount.js <user>
 *   user (address): Lender address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getUserQuoteCount
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getUserQuoteCount.js",
  contract: "saturnmarket",
  method: "getUserQuoteCount",
  params: [
    { name: "user", type: "address", desc: "Lender address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getUserQuoteCount",
});
