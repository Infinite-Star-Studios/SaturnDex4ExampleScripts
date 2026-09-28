#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserScoreTimestamp — read (free, no wallet)
 * getUserScoreTimestamp(user: address): number
 *
 * Returns the Unix timestamp (seconds) when the cached score was last written.
 * Use this alongside getUserCachedScore to tell users how fresh the displayed
 * score is, and to decide whether to call computeScore for an up-to-date
 * value.
 *
 * Returns number: Unix timestamp of the last score update.
 *
 * Usage: node Lending2scripts/getUserScoreTimestamp.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserScoreTimestamp
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserScoreTimestamp.js",
  contract: "saturncredit",
  method: "getUserScoreTimestamp",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserScoreTimestamp",
});
