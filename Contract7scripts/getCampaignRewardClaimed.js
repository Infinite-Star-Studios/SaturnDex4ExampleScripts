#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getCampaignRewardClaimed — read (free, no wallet)
 * getCampaignRewardClaimed(campaignId: number): number
 *
 * Raw amount of the reward token paid out to providers so far. When the
 * creator ends the campaign the value is set to the full reward total (the
 * unclaimed remainder went back to the creator).
 *
 * Returns number: Raw reward units already distributed.
 *
 * Usage: node Contract7scripts/getCampaignRewardClaimed.js <campaignId>
 *   campaignId (number): Campaign to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getCampaignRewardClaimed
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getCampaignRewardClaimed.js",
  contract: "saturnrewards",
  method: "getCampaignRewardClaimed",
  params: [
    { name: "campaignId", type: "number", desc: "Campaign to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getCampaignRewardClaimed",
});
