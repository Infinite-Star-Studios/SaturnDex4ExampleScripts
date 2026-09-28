#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getCampaignTotalLocked — read (free, no wallet)
 * getCampaignTotalLocked(campaignId: number): number
 *
 * Sum of the enrollment weights (liquidity-seconds) of every pool currently
 * enrolled in the campaign. Divide a pool's getPoolCampaignLiquidity() by this
 * to get its share.
 *
 * Returns number: Sum of enrolled liquidity-seconds weights.
 *
 * Usage: node Contract7scripts/getCampaignTotalLocked.js <campaignId>
 *   campaignId (number): Campaign ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getCampaignTotalLocked
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getCampaignTotalLocked.js",
  contract: "saturnrewards",
  method: "getCampaignTotalLocked",
  params: [
    { name: "campaignId", type: "number", desc: "Campaign ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getCampaignTotalLocked",
});
