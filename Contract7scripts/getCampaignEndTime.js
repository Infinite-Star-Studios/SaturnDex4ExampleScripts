#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getCampaignEndTime — read (free, no wallet)
 * getCampaignEndTime(campaignId: number): number
 *
 * Unix timestamp (seconds) at which the campaign ends and providers can begin
 * claiming.
 *
 * Returns number: End timestamp.
 *
 * Usage: node Contract7scripts/getCampaignEndTime.js <campaignId>
 *   campaignId (number): Campaign ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getCampaignEndTime
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getCampaignEndTime.js",
  contract: "saturnrewards",
  method: "getCampaignEndTime",
  params: [
    { name: "campaignId", type: "number", desc: "Campaign ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getCampaignEndTime",
});
