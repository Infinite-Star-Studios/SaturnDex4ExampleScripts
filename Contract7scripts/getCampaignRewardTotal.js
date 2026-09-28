#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getCampaignRewardTotal — read (free, no wallet)
 * getCampaignRewardTotal(campaignId: number): number
 *
 * Total reward amount that was escrowed at creation (raw units).
 *
 * Returns number: Raw total reward amount.
 *
 * Usage: node Contract7scripts/getCampaignRewardTotal.js <campaignId>
 *   campaignId (number): Campaign ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getCampaignRewardTotal
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getCampaignRewardTotal.js",
  contract: "saturnrewards",
  method: "getCampaignRewardTotal",
  params: [
    { name: "campaignId", type: "number", desc: "Campaign ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getCampaignRewardTotal",
});
