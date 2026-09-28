#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getLoanRewardPaid — read (free, no wallet)
 * getLoanRewardPaid(loanId: number): number
 *
 * Returns 1 once the loan's reward claim has run
 * (saturnloans.claimRepaymentReward), even if the reward was 0; 0 before that,
 * and always 0 when borrower == lender. A loan is settled only once.
 *
 * Returns number: 1 if reward distributed, 0 if pending or ineligible.
 *
 * Usage: node Lending8scripts/getLoanRewardPaid.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getLoanRewardPaid
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getLoanRewardPaid.js",
  contract: "saturntaz",
  method: "getLoanRewardPaid",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getLoanRewardPaid",
});
