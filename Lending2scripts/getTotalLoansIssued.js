#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getTotalLoansIssued — read (free, no wallet)
 * getTotalLoansIssued(): number
 *
 * Cumulative count of all loans ever created across the protocol. Incremented
 * by markLoanCreated on every loan origination.
 *
 * Returns number: Total loans ever issued.
 *
 * Usage: node Lending2scripts/getTotalLoansIssued.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getTotalLoansIssued
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getTotalLoansIssued.js",
  contract: "saturncredit",
  method: "getTotalLoansIssued",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getTotalLoansIssued",
});
