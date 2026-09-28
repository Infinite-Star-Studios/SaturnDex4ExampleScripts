#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.withdrawCommit — write (signed transaction, needs PHANTASMA_WIF)
 * withdrawCommit(from: address, launchpadId: number)
 *
 * Withdraws the caller's entire committed quote amount and re-opens their
 * reserved tokenA allocation for other buyers. Can be called while the
 * launchpad is in funding state (status 0), so buyers can back out before
 * activation. The contract also accepts status 3 (cancelled), but a launchpad
 * can only be cancelled while no buyer holds a commitment, so there is nothing
 * to withdraw then. No time limit: it also works after endTime while the
 * launchpad is still in funding. If you voted on an open dissolution proposal,
 * the weight your vote was counted with is removed from the tally (4.1.5: the
 * weight recorded at vote time, not your current commitment), and your vote
 * flag and reward debt are reset. If the launchpad is already active (status
 * 1) use `proposeDissolve` instead.
 *
 * Usage: node Contract17scripts/withdrawCommit.js <launchpadId>
 *   launchpadId (number): ID of the launchpad to withdraw from.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-withdrawCommit
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/withdrawCommit.js",
  contract: "saturnlaunchpad",
  method: "withdrawCommit",
  params: [
    { name: "from", type: "address", desc: "Buyer's address; must be the transaction witness." },
    { name: "launchpadId", type: "number", desc: "ID of the launchpad to withdraw from." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-withdrawCommit",
});
