#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getPendingRewards — read (free, no wallet)
 * getPendingRewards(user: address, tokenSymbol: string): number
 *
 * Computes and returns the unclaimed rewards (in raw token units) accrued to
 * user's tokenSymbol stake since their last claim, stake, or unstake: the
 * swap-fee slice plus the stakers' half of any saturnstakearb profit, as stake
 * × (getAccFeePerToken − getUserRewardDebt) / 1e12. This is the primary view
 * to display in a rewards dashboard — query it before calling claim() to show
 * the user what they'll receive.
 *
 * Returns number: Pending reward amount in raw units of tokenSymbol. Returns 0
 * if user has no stake or no rewards have accrued.
 *
 * Usage: node Contract21scripts/getPendingRewards.js <user> <tokenSymbol>
 *   user (address): The staker's address.
 *   tokenSymbol (string): The staked token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getPendingRewards
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getPendingRewards.js",
  contract: "saturnholders",
  method: "getPendingRewards",
  params: [
    { name: "user", type: "address", desc: "The staker's address." },
    { name: "tokenSymbol", type: "string", desc: "The staked token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getPendingRewards",
});
