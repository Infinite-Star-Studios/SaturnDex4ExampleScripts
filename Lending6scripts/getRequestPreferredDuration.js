#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestPreferredDuration — read (free, no wallet)
 * getRequestPreferredDuration(reqId: number): number
 *
 * Returns the borrower's preferred loan duration in seconds. Advisory —
 * lenders may quote different durations.
 *
 * Returns number: Preferred duration in seconds.
 *
 * Usage: node Lending6scripts/getRequestPreferredDuration.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestPreferredDuration
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestPreferredDuration.js",
  contract: "saturnmarket",
  method: "getRequestPreferredDuration",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestPreferredDuration",
});
