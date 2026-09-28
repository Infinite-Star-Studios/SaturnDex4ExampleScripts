#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getNextCampaignId — read (free, no wallet)
 * getNextCampaignId(): number
 *
 * The ID that will be assigned to the next campaign created.
 *
 * Returns number: Next campaign ID (starts at 1).
 *
 * Usage: node Contract7scripts/getNextCampaignId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getNextCampaignId
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getNextCampaignId.js",
  contract: "saturnrewards",
  method: "getNextCampaignId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getNextCampaignId",
});
