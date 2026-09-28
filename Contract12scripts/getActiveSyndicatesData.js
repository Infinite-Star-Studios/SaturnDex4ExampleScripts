#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getActiveSyndicatesData — read (free, no wallet)
 * getActiveSyndicatesData(): string*
 *
 * One pipe-delimited row per active syndicate:
 * syndicateId|tokenA|tokenB|targetA|targetB|raisedA|raisedB|feePer10k|poolId|status|memberCount.
 *
 * Returns string*: Stream of
 * "syndicateId|tokenA|tokenB|targetA|targetB|raisedA|raisedB|feePer10k|poolId|status|memberCount"
 * rows.
 *
 * Usage: node Contract12scripts/getActiveSyndicatesData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getActiveSyndicatesData
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getActiveSyndicatesData.js",
  contract: "saturnsyndicate",
  method: "getActiveSyndicatesData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getActiveSyndicatesData",
});
