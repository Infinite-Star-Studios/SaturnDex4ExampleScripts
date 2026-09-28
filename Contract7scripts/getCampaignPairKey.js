#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getCampaignPairKey — read (free, no wallet)
 * getCampaignPairKey(campaignId: number): string
 *
 * Canonical pair key ("A_B", tokens sorted) the campaign rewards. Pools whose
 * saturnpools.getPoolPairKey() equals it are eligible to enroll.
 *
 * Returns string: Canonical pair key.
 *
 * Usage: node Contract7scripts/getCampaignPairKey.js <campaignId>
 *   campaignId (number): Campaign to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getCampaignPairKey
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getCampaignPairKey.js",
  contract: "saturnrewards",
  method: "getCampaignPairKey",
  params: [
    { name: "campaignId", type: "number", desc: "Campaign to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getCampaignPairKey",
});
