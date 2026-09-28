#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.enrollInCampaign — write (signed transaction, needs PHANTASMA_WIF)
 * enrollInCampaign(from: address, poolId: number, campaignId: number)
 *
 * Called by a pool provider to enroll their pool in an active campaign. The
 * pool's current scaled liquidity is snapshot and multiplied by the seconds
 * remaining until the campaign's end time; that liquidity-seconds weight is
 * added to the campaign's total and fixes the provider's share — later changes
 * to the pool's depth do not matter, but enrolling earlier earns more.
 * Enrollment locks the pool (cannot change fee, cannot remove) until the
 * reward is claimed or the pool withdraws. A pool that is under a financial
 * product (bond, rental, option, syndicate, launchpad or loan collateral)
 * cannot enroll.
 *
 * Returns void: Success = pool enrolled and campaign lock incremented.
 *
 * Usage: node Contract7scripts/enrollInCampaign.js <poolId> <campaignId>
 *   poolId (number): Pool to enroll.
 *   campaignId (number): Campaign to enroll into.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-enrollInCampaign
 */

const { send } = require("../common");

send({
  file: "Contract7scripts/enrollInCampaign.js",
  contract: "saturnrewards",
  method: "enrollInCampaign",
  params: [
    { name: "from", type: "address", desc: "Pool provider wallet (must be witness)." },
    { name: "poolId", type: "number", desc: "Pool to enroll." },
    { name: "campaignId", type: "number", desc: "Campaign to enroll into." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrewards-enrollInCampaign",
});
