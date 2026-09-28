#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getQuoteSummary — read (free, no wallet)
 * getQuoteSummary(qId: number): string
 *
 * One-call summary of a quote's most-needed fields. Format:
 * "rate:<n>_duration:<n>_amount:<n>_colType:<n>_status:<n>". Use for the quote
 * card in the borrower's decision UI.
 *
 * Returns string: Packed summary string.
 *
 * Usage: node Lending6scripts/getQuoteSummary.js <qId>
 *   qId (number): Quote ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getQuoteSummary
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getQuoteSummary.js",
  contract: "saturnmarket",
  method: "getQuoteSummary",
  params: [
    { name: "qId", type: "number", desc: "Quote ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getQuoteSummary",
});
