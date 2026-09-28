#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getMinLoanDuration — read (free, no wallet)
 * getMinLoanDuration(): number
 *
 * Minimum loan duration in seconds. Any P2P quote or auto-loan request with a
 * shorter duration will be rejected. Default is 604,800 (7 days).
 *
 * Returns number: Minimum loan duration in seconds (default: 604800 = 7 days).
 *
 * Usage: node Lending1scripts/getMinLoanDuration.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getMinLoanDuration
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getMinLoanDuration.js",
  contract: "saturnlendcfg",
  method: "getMinLoanDuration",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getMinLoanDuration",
});
