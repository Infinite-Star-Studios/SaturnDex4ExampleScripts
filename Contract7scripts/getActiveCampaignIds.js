#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getActiveCampaignIds — read (free, no wallet)
 * getActiveCampaignIds(): number*
 *
 * Yields the ids of campaigns whose active flag is still 1 (not yet ended by
 * the creator). Note that a campaign past its end time stays active until
 * endCampaign() is called, so check getCampaignEndTime() to separate
 * "enrollable" from "claimable".
 *
 * Returns number*: Stream of campaign ids.
 *
 * Usage: node Contract7scripts/getActiveCampaignIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getActiveCampaignIds
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getActiveCampaignIds.js",
  contract: "saturnrewards",
  method: "getActiveCampaignIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getActiveCampaignIds",
});
