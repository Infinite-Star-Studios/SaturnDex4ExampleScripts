#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getMaxLoansPerUser — read (free, no wallet)
 * getMaxLoansPerUser(): number
 *
 * Maximum number of active loans a single borrower address may hold
 * simultaneously. Default is 5. Check this before showing a borrow button to a
 * user who may already be at capacity.
 *
 * Returns number: Maximum concurrent active loans per address (default: 5).
 *
 * Usage: node Lending1scripts/getMaxLoansPerUser.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getMaxLoansPerUser
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getMaxLoansPerUser.js",
  contract: "saturnlendcfg",
  method: "getMaxLoansPerUser",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getMaxLoansPerUser",
});
