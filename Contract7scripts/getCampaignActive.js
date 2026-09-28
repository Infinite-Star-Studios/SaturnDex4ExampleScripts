#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getCampaignActive — read (free, no wallet)
 * getCampaignActive(campaignId: number): number
 *
 * Returns 1 if the campaign is still active, 0 if it has been ended by the
 * creator.
 *
 * Returns number: 1 = active, 0 = ended.
 *
 * Usage: node Contract7scripts/getCampaignActive.js <campaignId>
 *   campaignId (number): Campaign ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getCampaignActive
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getCampaignActive.js",
  contract: "saturnrewards",
  method: "getCampaignActive",
  params: [
    { name: "campaignId", type: "number", desc: "Campaign ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getCampaignActive",
});
