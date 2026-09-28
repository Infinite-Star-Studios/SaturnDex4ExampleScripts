#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getUserRewardDebt — read (free, no wallet)
 * getUserRewardDebt(user: address, tokenSymbol: string): number
 *
 * Returns the user's reward-debt bookmark — the accFeePerToken value at the
 * time of their last settle (stake, unstake, or claim). The difference between
 * the current accumulator and this bookmark, multiplied by the user's stake,
 * gives the pending rewards. Useful for verifying MasterChef math or building
 * advanced analytics.
 *
 * Returns number: The scaled accumulator snapshot (1e12 precision) at the
 * user's last settle.
 *
 * Usage: node Contract21scripts/getUserRewardDebt.js <user> <tokenSymbol>
 *   user (address): The staker's address.
 *   tokenSymbol (string): The staked token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getUserRewardDebt
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getUserRewardDebt.js",
  contract: "saturnholders",
  method: "getUserRewardDebt",
  params: [
    { name: "user", type: "address", desc: "The staker's address." },
    { name: "tokenSymbol", type: "string", desc: "The staked token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getUserRewardDebt",
});
