#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getBuyerHasVoted — read (free, no wallet)
 * getBuyerHasVoted(launchpadId: number, buyer: address): number
 *
 * Returns 1 if the given buyer has already cast their dissolution vote for the
 * open proposal, 0 otherwise. withdrawCommit resets it to 0 (and removes the
 * vote from the tally); claimDissolution and claimFundingRefund leave it at 1.
 *
 * Returns number: 1 = voted; 0 = not voted.
 *
 * Usage: node Contract17scripts/getBuyerHasVoted.js <launchpadId> <buyer>
 *   launchpadId (number): ID of the launchpad.
 *   buyer (address): Buyer address to check.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getBuyerHasVoted
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getBuyerHasVoted.js",
  contract: "saturnlaunchpad",
  method: "getBuyerHasVoted",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
    { name: "buyer", type: "address", desc: "Buyer address to check." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getBuyerHasVoted",
});
