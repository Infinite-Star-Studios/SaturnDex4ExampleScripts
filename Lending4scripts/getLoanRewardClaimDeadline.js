#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanRewardClaimDeadline — read (free, no wallet)
 * getLoanRewardClaimDeadline(loanId: number): number
 *
 * Last unix second claimRepaymentReward accepts the loan; 0 when it never will
 * (not repaid, or repaid before 1.0.3, when the reward was settled at
 * repayment). saturntaz.getLoanRewardPaid(loanId) tells whether the reward
 * went out.
 *
 * Returns number: Unix seconds, or 0.
 *
 * Usage: node Lending4scripts/getLoanRewardClaimDeadline.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanRewardClaimDeadline
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanRewardClaimDeadline.js",
  contract: "saturnloans",
  method: "getLoanRewardClaimDeadline",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanRewardClaimDeadline",
});
