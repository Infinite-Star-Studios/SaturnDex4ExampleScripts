#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.createCampaign — write (signed transaction, needs PHANTASMA_WIF)
 * createCampaign(from: address, tokenA: string, tokenB: string, rewardToken: string, rewardAmount: number, durationSeconds: number)
 *
 * Creates a new reward campaign targeting a specific token pair. The full
 * rewardAmount of rewardToken is transferred up front from the creator's
 * wallet into the contract, and will be distributed proportionally to pools
 * that enroll during the campaign window.
 *
 * Returns void: Success = campaign stored and reward token deposited.
 *
 * Usage: node Contract7scripts/createCampaign.js <tokenA> <tokenB> <rewardToken> <rewardAmount> <durationSeconds>
 *   tokenA (string): First token in the target pair.
 *   tokenB (string): Second token in the target pair.
 *   rewardToken (string): Token paid out as the reward.
 *   rewardAmount (number): Total raw reward amount to escrow.
 *   durationSeconds (number): Campaign length in seconds. Min 86400 (1 day),
 *   max 31536000 (1 year).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-createCampaign
 */

const { send } = require("../common");

send({
  file: "Contract7scripts/createCampaign.js",
  contract: "saturnrewards",
  method: "createCampaign",
  params: [
    { name: "from", type: "address", desc: "Campaign creator wallet (must be witness)." },
    { name: "tokenA", type: "string", desc: "First token in the target pair." },
    { name: "tokenB", type: "string", desc: "Second token in the target pair." },
    { name: "rewardToken", type: "string", desc: "Token paid out as the reward." },
    { name: "rewardAmount", type: "number", desc: "Total raw reward amount to escrow." },
    { name: "durationSeconds", type: "number", desc: "Campaign length in seconds. Min 86400 (1 day), max 31536000 (1 year)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrewards-createCampaign",
});
