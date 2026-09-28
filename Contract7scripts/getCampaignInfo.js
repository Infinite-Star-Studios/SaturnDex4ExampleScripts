#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getCampaignInfo — read (free, no wallet)
 * getCampaignInfo(campaignId: number): string
 *
 * Returns a single packed string with every top-level field of a campaign.
 * Cheap to render — one round-trip instead of eight. Do not split on every
 * underscore: the pair key contains one ("KCAL_SOUL"). Split on the
 * "_<label>:" markers instead. locked is in liquidity-seconds.
 *
 * Returns string: Format:
 * "pair:<key>_reward:<token>_total:<N>_claimed:<N>_start:<ts>_end:<ts>_active:<0|1>_locked:<N>".
 *
 * Usage: node Contract7scripts/getCampaignInfo.js <campaignId>
 *   campaignId (number): Campaign ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getCampaignInfo
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getCampaignInfo.js",
  contract: "saturnrewards",
  method: "getCampaignInfo",
  params: [
    { name: "campaignId", type: "number", desc: "Campaign ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getCampaignInfo",
});
