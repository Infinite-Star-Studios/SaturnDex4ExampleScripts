#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getPoolCampaignClaimed — read (free, no wallet)
 * getPoolCampaignClaimed(poolId: number, campaignId: number): number
 *
 * Returns the raw reward amount already claimed for this (pool, campaign)
 * pair. Zero until the provider calls claimCampaignReward().
 *
 * Returns number: Amount already claimed.
 *
 * Usage: node Contract7scripts/getPoolCampaignClaimed.js <poolId> <campaignId>
 *   poolId (number): Pool ID.
 *   campaignId (number): Campaign ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getPoolCampaignClaimed
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getPoolCampaignClaimed.js",
  contract: "saturnrewards",
  method: "getPoolCampaignClaimed",
  params: [
    { name: "poolId", type: "number", desc: "Pool ID." },
    { name: "campaignId", type: "number", desc: "Campaign ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getPoolCampaignClaimed",
});
