#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getCampaignCreator — read (free, no wallet)
 * getCampaignCreator(campaignId: number): address
 *
 * Wallet that funded the campaign — the only address allowed to call
 * endCampaign().
 *
 * Returns address: Creator address.
 *
 * Usage: node Contract7scripts/getCampaignCreator.js <campaignId>
 *   campaignId (number): Campaign to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getCampaignCreator
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getCampaignCreator.js",
  contract: "saturnrewards",
  method: "getCampaignCreator",
  params: [
    { name: "campaignId", type: "number", desc: "Campaign to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getCampaignCreator",
});
