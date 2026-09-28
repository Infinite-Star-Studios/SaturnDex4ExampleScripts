#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getSecondsPerYear — read (free, no wallet)
 * getSecondsPerYear(): number
 *
 * Returns 31,536,000 — the constant used by calculateInterest() to annualise
 * the rate. Use when reproducing the interest formula client-side.
 *
 * Returns number: Seconds per year constant (31536000).
 *
 * Usage: node Lending1scripts/getSecondsPerYear.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getSecondsPerYear
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getSecondsPerYear.js",
  contract: "saturnlendcfg",
  method: "getSecondsPerYear",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getSecondsPerYear",
});
