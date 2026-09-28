#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getCampaignRewardToken — read (free, no wallet)
 * getCampaignRewardToken(campaignId: number): string
 *
 * Symbol of the token being distributed as the campaign reward.
 *
 * Returns string: Reward token symbol.
 *
 * Usage: node Contract7scripts/getCampaignRewardToken.js <campaignId>
 *   campaignId (number): Campaign ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getCampaignRewardToken
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getCampaignRewardToken.js",
  contract: "saturnrewards",
  method: "getCampaignRewardToken",
  params: [
    { name: "campaignId", type: "number", desc: "Campaign ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getCampaignRewardToken",
});
