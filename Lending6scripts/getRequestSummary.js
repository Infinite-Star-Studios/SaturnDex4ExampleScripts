#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestSummary — read (free, no wallet)
 * getRequestSummary(reqId: number): string
 *
 * One-call summary of a request's most-needed fields. Format:
 * "token:<sym>_loanDex:<n>_amount:<n>_colType:<n>_status:<n>_quotes:<n>_maxRate:<n>".
 * Use for marketplace listing cards where a single round-trip is preferable to
 * seven.
 *
 * Returns string: Packed summary string.
 *
 * Usage: node Lending6scripts/getRequestSummary.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestSummary
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestSummary.js",
  contract: "saturnmarket",
  method: "getRequestSummary",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestSummary",
});
