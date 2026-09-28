#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getAllCampaignIds — read (free, no wallet)
 * getAllCampaignIds(): number*
 *
 * Generator yielding the ids of campaigns that have not been ended.
 * endCampaign() removes the id, so in practice it matches
 * getActiveCampaignIds(). Walk 1 .. getNextCampaignId() − 1 to reach ended
 * campaigns.
 *
 * Returns number*: Iterable of campaign IDs.
 *
 * Usage: node Contract7scripts/getAllCampaignIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getAllCampaignIds
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getAllCampaignIds.js",
  contract: "saturnrewards",
  method: "getAllCampaignIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getAllCampaignIds",
});
