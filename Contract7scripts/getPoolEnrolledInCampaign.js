#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getPoolEnrolledInCampaign — read (free, no wallet)
 * getPoolEnrolledInCampaign(poolId: number, campaignId: number): number
 *
 * Returns 1 if the pool is currently enrolled in the given campaign, 0
 * otherwise.
 *
 * Returns number: 1 = enrolled, 0 = not enrolled.
 *
 * Usage: node Contract7scripts/getPoolEnrolledInCampaign.js <poolId> <campaignId>
 *   poolId (number): Pool ID.
 *   campaignId (number): Campaign ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getPoolEnrolledInCampaign
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getPoolEnrolledInCampaign.js",
  contract: "saturnrewards",
  method: "getPoolEnrolledInCampaign",
  params: [
    { name: "poolId", type: "number", desc: "Pool ID." },
    { name: "campaignId", type: "number", desc: "Campaign ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getPoolEnrolledInCampaign",
});
