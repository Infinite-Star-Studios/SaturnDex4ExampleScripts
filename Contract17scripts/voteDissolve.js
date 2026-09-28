#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.voteDissolve — write (signed transaction, needs PHANTASMA_WIF)
 * voteDissolve(from: address, launchpadId: number)
 *
 * Adds the caller's committed quote weight to the open dissolution vote. Each
 * buyer can vote once. Votes are weighted by the buyer's committed quote at
 * the moment of voting; quote committed afterwards does not add to the vote. A
 * strict majority of total buyer stake (> 50%) is needed for `executeDissolve`
 * to succeed.
 *
 * Usage: node Contract17scripts/voteDissolve.js <launchpadId>
 *   launchpadId (number): ID of the launchpad with the open proposal.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-voteDissolve
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/voteDissolve.js",
  contract: "saturnlaunchpad",
  method: "voteDissolve",
  params: [
    { name: "from", type: "address", desc: "A buyer who has not yet voted; must be the transaction witness." },
    { name: "launchpadId", type: "number", desc: "ID of the launchpad with the open proposal." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-voteDissolve",
});
