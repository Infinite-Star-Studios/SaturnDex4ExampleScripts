#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.getExpectedReward — read (free, no wallet)
 * getExpectedReward(poolId: number, campaignId: number): number
 *
 * Computes poolWeight × totalReward / totalLocked in raw reward units, using
 * the current totalLocked. The number will drift if other pools enroll or
 * withdraw — always requery just before submitting a claim. It does not apply
 * the claim's cap: it keeps returning the share after the pool has claimed,
 * and after endCampaign(), when the real payout is 0.
 *
 * Returns number: Projected reward in raw units (0 if not enrolled).
 *
 * Usage: node Contract7scripts/getExpectedReward.js <poolId> <campaignId>
 *   poolId (number): Enrolled pool.
 *   campaignId (number): Campaign the pool is enrolled in.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-getExpectedReward
 */

const { read } = require("../common");

read({
  file: "Contract7scripts/getExpectedReward.js",
  contract: "saturnrewards",
  method: "getExpectedReward",
  params: [
    { name: "poolId", type: "number", desc: "Enrolled pool." },
    { name: "campaignId", type: "number", desc: "Campaign the pool is enrolled in." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrewards-getExpectedReward",
});
