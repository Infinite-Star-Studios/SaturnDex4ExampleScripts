#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getBuyerCommittedQuote — read (free, no wallet)
 * getBuyerCommittedQuote(launchpadId: number, buyer: address): number
 *
 * Returns the total raw tokenQuote amount currently committed by a specific
 * buyer in a launchpad. Returns 0 if the buyer has not committed or has fully
 * withdrawn.
 *
 * Returns number: Committed tokenQuote amount, or 0.
 *
 * Usage: node Contract17scripts/getBuyerCommittedQuote.js <launchpadId> <buyer>
 *   launchpadId (number): ID of the launchpad.
 *   buyer (address): Address to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getBuyerCommittedQuote
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getBuyerCommittedQuote.js",
  contract: "saturnlaunchpad",
  method: "getBuyerCommittedQuote",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
    { name: "buyer", type: "address", desc: "Address to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getBuyerCommittedQuote",
});
