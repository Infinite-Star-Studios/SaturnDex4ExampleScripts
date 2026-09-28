#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getUserOverBet — read (free, no wallet)
 * getUserOverBet(marketId: number, user: address): number
 *
 * Returns a user's total raw wager on OVER for a specific market.
 *
 * Returns number: Raw OVER bet.
 *
 * Usage: node Contract15scripts/getUserOverBet.js <marketId> <user>
 *   marketId (number): The market to inspect.
 *   user (address): The address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getUserOverBet
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getUserOverBet.js",
  contract: "saturnpredict",
  method: "getUserOverBet",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
    { name: "user", type: "address", desc: "The address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getUserOverBet",
});
