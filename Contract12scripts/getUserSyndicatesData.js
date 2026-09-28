#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getUserSyndicatesData — read (free, no wallet)
 * getUserSyndicatesData(user: address): string*
 *
 * Same row layout as getActiveSyndicatesData() for every syndicate (any
 * status) in which the user has a non-zero tokenA contribution — a member's
 * portfolio in one call.
 *
 * Returns string*: Stream of
 * "syndicateId|tokenA|tokenB|targetA|targetB|raisedA|raisedB|feePer10k|poolId|status|memberCount"
 * rows.
 *
 * Usage: node Contract12scripts/getUserSyndicatesData.js <user>
 *   user (address): Wallet to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getUserSyndicatesData
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getUserSyndicatesData.js",
  contract: "saturnsyndicate",
  method: "getUserSyndicatesData",
  params: [
    { name: "user", type: "address", desc: "Wallet to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getUserSyndicatesData",
});
