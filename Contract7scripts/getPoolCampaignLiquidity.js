#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getPoolCampaignLiquidity — read (free, no wallet)
 * getPoolCampaignLiquidity(poolId: number, campaignId: number): number
 *
 * Returns the enrollment weight of this pool: its scaled liquidity at
 * enrollment multiplied by the seconds that remained in the campaign
 * (liquidity-seconds). This is the weight used in the proportional reward
 * calculation — it does NOT update as the pool's reserves change later.
 *
 * Returns number: Liquidity-seconds weight fixed at enrollment.
 *
 * Usage: node Contract7scripts/getPoolCampaignLiquidity.js <poolId> <campaignId>
 *   poolId (number): Pool ID.
 *   campaignId (number): Campaign ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getPoolCampaignLiquidity
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getPoolCampaignLiquidity.js",
  contract: "saturnrewards",
  method: "getPoolCampaignLiquidity",
  params: [
    { name: "poolId", type: "number", desc: "Pool ID." },
    { name: "campaignId", type: "number", desc: "Campaign ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getPoolCampaignLiquidity",
});
