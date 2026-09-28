#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getMaxLoanDuration — read (free, no wallet)
 * getMaxLoanDuration(): number
 *
 * Maximum loan duration in seconds. Default is 31,536,000 (365 days). Show
 * this as the upper bound on your loan-term slider.
 *
 * Returns number: Maximum loan duration in seconds (default: 31536000 = 365
 * days).
 *
 * Usage: node Lending1scripts/getMaxLoanDuration.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getMaxLoanDuration
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getMaxLoanDuration.js",
  contract: "saturnlendcfg",
  method: "getMaxLoanDuration",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getMaxLoanDuration",
});
