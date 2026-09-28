#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getGracePeriod — read (free, no wallet)
 * getGracePeriod(): number
 *
 * Seconds a payment may come after its installment's due time and still count
 * as on time, and seconds after the loan's final due date
 * (saturnloans.getLoanDueDate) before the lender can call
 * saturnloans.triggerDefault. A late installment only costs credit score; it
 * never defaults the loan. Default is 259,200 (3 days).
 *
 * Returns number: Grace period in seconds (default: 259200 = 3 days).
 *
 * Usage: node Lending1scripts/getGracePeriod.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getGracePeriod
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getGracePeriod.js",
  contract: "saturnlendcfg",
  method: "getGracePeriod",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getGracePeriod",
});
