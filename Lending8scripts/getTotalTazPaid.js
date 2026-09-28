#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getTotalTazPaid — read (free, no wallet)
 * getTotalTazPaid(): number
 *
 * Returns the cumulative raw TAZ paid out as rewards since contract deployment
 * (borrower + lender + pledger shares combined).
 *
 * Returns number: Total raw TAZ (9-decimal) distributed as rewards.
 *
 * Usage: node Lending8scripts/getTotalTazPaid.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getTotalTazPaid
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getTotalTazPaid.js",
  contract: "saturntaz",
  method: "getTotalTazPaid",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getTotalTazPaid",
});
