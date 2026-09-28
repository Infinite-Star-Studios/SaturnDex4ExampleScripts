#!/usr/bin/env node
"use strict";

/**
 * saturntaz.previewRewardForLoan — read (free, no wallet)
 * previewRewardForLoan(loanId: number): number
 *
 * What saturnloans.claimRepaymentReward would pay in total (raw TAZ, before
 * the borrower / lender / pledger split) if this loan were fully repaid now:
 * the formula on its TAZ principal and elapsed days, the fee cap and the
 * treasury clamp all applied. 0 once paid, for an unregistered loan, or when
 * borrower == lender.
 *
 * Returns number: Raw TAZ (9 decimals).
 *
 * Usage: node Lending8scripts/previewRewardForLoan.js <loanId>
 *   loanId (number): Loan ID in saturnloans.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-previewRewardForLoan
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/previewRewardForLoan.js",
  contract: "saturntaz",
  method: "previewRewardForLoan",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID in saturnloans." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-previewRewardForLoan",
});
