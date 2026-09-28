#!/usr/bin/env node
"use strict";

/**
 * saturnloans.claimRepaymentReward — write (signed transaction, needs PHANTASMA_WIF)
 * claimRepaymentReward(loanId: number)
 *
 * Pays the saturntaz TAZ reward of a loan fully repaid under 1.0.3: the
 * borrower's and lender's shares are sent to them, the pledgers' shares are
 * credited to their claimable balances (saturntaz.claimPledgeRewards). Anyone
 * may call it, once, until getLoanRewardClaimDeadline(loanId): one reward day
 * after the repayment (saturntaz getRewardParam("daySeconds"), 0 = 86,400 s).
 * The reward may be 0 (see saturntaz.previewRewardForLoan); a wallet refusing
 * TAZ only makes this call revert, the repayment stands.
 *
 * Usage: node Lending4scripts/claimRepaymentReward.js <loanId>
 *   loanId (number): A loan with status 2 (repaid).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-claimRepaymentReward
 */

const { send } = require("../common");

send({
  file: "Lending4scripts/claimRepaymentReward.js",
  contract: "saturnloans",
  method: "claimRepaymentReward",
  params: [
    { name: "loanId", type: "number", desc: "A loan with status 2 (repaid)." },
  ],
  walletIndex: -1,
  docs: "https://devops.saturnx.cc/reference#saturnloans-claimRepaymentReward",
});
