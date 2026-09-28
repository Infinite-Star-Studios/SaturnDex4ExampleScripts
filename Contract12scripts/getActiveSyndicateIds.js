#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getActiveSyndicateIds — read (free, no wallet)
 * getActiveSyndicateIds(): number*
 *
 * Yields the ids of syndicates in status 1 (active, pool live).
 *
 * Returns number*: Stream of syndicate ids.
 *
 * Usage: node Contract12scripts/getActiveSyndicateIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getActiveSyndicateIds
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getActiveSyndicateIds.js",
  contract: "saturnsyndicate",
  method: "getActiveSyndicateIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getActiveSyndicateIds",
});
