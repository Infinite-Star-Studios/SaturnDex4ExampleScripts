#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.claimLaunchpadReward — write (signed transaction, needs PHANTASMA_WIF)
 * claimLaunchpadReward(from: address, launchpadId: number)
 *
 * Harvests accumulated trading-fee rewards for a participant in an active
 * launchpad (status 1). Both the creator and buyers earn fees proportional to
 * their share weight (buyers: their committed quote; creator: an equal weight
 * to the total raised quote, set at activation). Triggers a fee harvest from
 * the underlying pool before computing pending amounts, so the payout reflects
 * fees earned up to this block. Can be called as often as desired.
 *
 * Usage: node Contract17scripts/claimLaunchpadReward.js <launchpadId>
 *   launchpadId (number): ID of the active launchpad.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-claimLaunchpadReward
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/claimLaunchpadReward.js",
  contract: "saturnlaunchpad",
  method: "claimLaunchpadReward",
  params: [
    { name: "from", type: "address", desc: "Participant's address (creator or buyer); must be the transaction witness." },
    { name: "launchpadId", type: "number", desc: "ID of the active launchpad." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-claimLaunchpadReward",
});
