#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getActiveCampaignsData — read (free, no wallet)
 * getActiveCampaignsData(): string*
 *
 * One pipe-delimited row per active campaign:
 * campaignId|pairKey|rewardToken|rewardTotal|rewardClaimed|startTime|endTime|active|totalLocked.
 * totalLocked is the liquidity-seconds sum. Builds a campaigns table in one
 * round-trip.
 *
 * Returns string*: Stream of
 * "campaignId|pairKey|rewardToken|rewardTotal|rewardClaimed|startTime|endTime|active|totalLocked"
 * rows.
 *
 * Usage: node Contract7scripts/getActiveCampaignsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getActiveCampaignsData
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getActiveCampaignsData.js",
  contract: "saturnrewards",
  method: "getActiveCampaignsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getActiveCampaignsData",
});
