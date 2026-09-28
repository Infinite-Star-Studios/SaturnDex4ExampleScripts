#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getTotalLoansResolved — read (free, no wallet)
 * getTotalLoansResolved(): number
 *
 * Returns the total number of loans resolved (both full repayments and
 * defaults/liquidations) that were registered with this contract.
 *
 * Returns number: Count of all resolved registered loans.
 *
 * Usage: node Lending8scripts/getTotalLoansResolved.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getTotalLoansResolved
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getTotalLoansResolved.js",
  contract: "saturntaz",
  method: "getTotalLoansResolved",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getTotalLoansResolved",
});
