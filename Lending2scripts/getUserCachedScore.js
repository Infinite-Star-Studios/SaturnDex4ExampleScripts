#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserCachedScore — read (free, no wallet)
 * getUserCachedScore(user: address): number
 *
 * Returns the stored credit score for this user. It is set to the base score
 * at registration and rewritten only when computeScore runs in a transaction;
 * loan events (origination, repayment, default) do not refresh it. It can
 * therefore lag the live score (mainnet: a borrower with an open loan still
 * shows 200 while computeScore returns 207). For the live value, read
 * computeScore through invokeRawScript.
 *
 * Returns number: Cached score in [0, 1000]. Returns 0 if the user is
 * unregistered.
 *
 * Usage: node Lending2scripts/getUserCachedScore.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserCachedScore
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserCachedScore.js",
  contract: "saturncredit",
  method: "getUserCachedScore",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserCachedScore",
});
