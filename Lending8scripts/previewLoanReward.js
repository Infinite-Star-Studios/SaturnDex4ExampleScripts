#!/usr/bin/env node
"use strict";

/**
 * saturntaz.previewLoanReward — read (free, no wallet)
 * previewLoanReward(loanValueInRA: number, durationDays: number, lender: address): number
 *
 * Runs the reward formula (before the 30/30/40 split) for a hypothetical loan
 * and the lender's current eligible pledge. Since 1.2 the first argument is
 * the loan principal in 8-decimal scaled TAZ (the parameter keeps its old
 * name) and durationDays the whole days the loan will have run. The fee cap
 * (feeRebateBps) and the treasury clamp need a real loan and are not applied,
 * so this is an upper bound; previewRewardForLoan(loanId) gives the real
 * figure for an open loan.
 *
 * Returns number: Total raw TAZ reward (9-decimal) that would be distributed
 * on full repayment.
 *
 * Usage: node Lending8scripts/previewLoanReward.js <loanValueInRA> <durationDays> <lender>
 *   loanValueInRA (number): Since 1.2: the loan principal in scaled
 *   (8-decimal) TAZ, e.g. 5,000,000,000 for 50 TAZ.
 *   durationDays (number): Whole days the loan will have run at repayment
 *   (the time factor saturates at durationCapDays).
 *   lender (address): Lender address whose current active pledge will be
 *   used in the formula.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-previewLoanReward
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/previewLoanReward.js",
  contract: "saturntaz",
  method: "previewLoanReward",
  params: [
    { name: "loanValueInRA", type: "number", desc: "Since 1.2: the loan principal in scaled (8-decimal) TAZ, e.g. 5,000,000,000 for 50 TAZ." },
    { name: "durationDays", type: "number", desc: "Whole days the loan will have run at repayment (the time factor saturates at durationCapDays)." },
    { name: "lender", type: "address", desc: "Lender address whose current active pledge will be used in the formula." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-previewLoanReward",
});
