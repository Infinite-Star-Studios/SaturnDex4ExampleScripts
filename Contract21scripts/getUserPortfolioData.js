#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getUserPortfolioData — read (free, no wallet)
 * getUserPortfolioData(user: address): string*
 *
 * Returns one row per token in which user has an active stake (stake > 0).
 * Each row is "symbol|stake|pending|rewardDebt". Use this to render a user's
 * entire staking portfolio in a single call instead of N per-token
 * round-trips.
 *
 * Returns string*: Iterator of rows; each row:
 * "symbol|stake|pending|rewardDebt". Empty if user has no stakes.
 *
 * Usage: node Contract21scripts/getUserPortfolioData.js <user>
 *   user (address): The staker's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getUserPortfolioData
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getUserPortfolioData.js",
  contract: "saturnholders",
  method: "getUserPortfolioData",
  params: [
    { name: "user", type: "address", desc: "The staker's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getUserPortfolioData",
});
