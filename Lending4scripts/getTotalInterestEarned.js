#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getTotalInterestEarned — read (free, no wallet)
 * getTotalInterestEarned(): number
 *
 * Returns the cumulative interest collected on all fully-repaid loans, in
 * scaled units. Note: defaulted/liquidated loans do not contribute to this
 * counter.
 *
 * Returns number: Cumulative interest earned in scaled units.
 *
 * Usage: node Lending4scripts/getTotalInterestEarned.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getTotalInterestEarned
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getTotalInterestEarned.js",
  contract: "saturnloans",
  method: "getTotalInterestEarned",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getTotalInterestEarned",
});
