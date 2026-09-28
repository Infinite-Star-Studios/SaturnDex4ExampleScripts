#!/usr/bin/env node
"use strict";

/**
 * saturntaz.claimPledgeRewards — write (signed transaction, needs PHANTASMA_WIF)
 * claimPledgeRewards(from: address)
 *
 * Transfers all accumulated TAZ rewards to the pledger. Pledger rewards accrue
 * in pledgerClaimable[from] each time a lender's loan is fully repaid; call
 * this to collect them. Borrower and lender shares are not claimed here: they
 * are sent directly when saturnloans.claimRepaymentReward(loanId) runs (anyone
 * may call it once, within one reward day of the full repayment).
 *
 * Usage: node Lending8scripts/claimPledgeRewards.js
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-claimPledgeRewards
 */

const { send } = require("../common");

send({
  file: "Lending8scripts/claimPledgeRewards.js",
  contract: "saturntaz",
  method: "claimPledgeRewards",
  params: [
    { name: "from", type: "address", desc: "Pledger address claiming accumulated TAZ (must be witness)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturntaz-claimPledgeRewards",
});
