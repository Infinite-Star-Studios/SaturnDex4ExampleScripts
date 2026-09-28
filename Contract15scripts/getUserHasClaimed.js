#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getUserHasClaimed — read (free, no wallet)
 * getUserHasClaimed(marketId: number, user: address): number
 *
 * Returns 1 if the user has already called claimWinnings or claimRefund for
 * this market, 0 otherwise.
 *
 * Returns number: 0 or 1.
 *
 * Usage: node Contract15scripts/getUserHasClaimed.js <marketId> <user>
 *   marketId (number): The market to inspect.
 *   user (address): The address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getUserHasClaimed
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getUserHasClaimed.js",
  contract: "saturnpredict",
  method: "getUserHasClaimed",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
    { name: "user", type: "address", desc: "The address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getUserHasClaimed",
});
