#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getCampaignStartTime — read (free, no wallet)
 * getCampaignStartTime(campaignId: number): number
 *
 * Unix timestamp at which the campaign was created; enrollment weights are
 * measured against the window between now and getCampaignEndTime().
 *
 * Returns number: Unix seconds.
 *
 * Usage: node Contract7scripts/getCampaignStartTime.js <campaignId>
 *   campaignId (number): Campaign to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getCampaignStartTime
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getCampaignStartTime.js",
  contract: "saturnrewards",
  method: "getCampaignStartTime",
  params: [
    { name: "campaignId", type: "number", desc: "Campaign to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getCampaignStartTime",
});
