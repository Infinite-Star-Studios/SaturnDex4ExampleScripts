#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getCreditReport — read (free, no wallet)
 * getCreditReport(user: address): string
 *
 * Returns a packed summary string of the user's full credit profile in a
 * single call — score, repayment counts, streak, and loan totals. Format:
 * `score:N_onTime:N_late:N_defaults:N_bestStreak:N_totalLoans:N_active:N`.
 * Ideal for displaying a compact credit card in lending UIs without making
 * seven individual read calls.
 *
 * Returns string: Packed credit profile string, e.g.
 * "score:720_onTime:14_late:1_defaults:0_bestStreak:12_totalLoans:15_active:1".
 *
 * Usage: node Lending2scripts/getCreditReport.js <user>
 *   user (address): The registered borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getCreditReport
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getCreditReport.js",
  contract: "saturncredit",
  method: "getCreditReport",
  params: [
    { name: "user", type: "address", desc: "The registered borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getCreditReport",
});
