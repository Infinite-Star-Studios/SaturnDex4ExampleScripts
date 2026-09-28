#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getUserUnderBet — read (free, no wallet)
 * getUserUnderBet(marketId: number, user: address): number
 *
 * Returns a user's total raw wager on UNDER for a specific market.
 *
 * Returns number: Raw UNDER bet.
 *
 * Usage: node Contract15scripts/getUserUnderBet.js <marketId> <user>
 *   marketId (number): The market to inspect.
 *   user (address): The address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getUserUnderBet
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getUserUnderBet.js",
  contract: "saturnpredict",
  method: "getUserUnderBet",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
    { name: "user", type: "address", desc: "The address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getUserUnderBet",
});
