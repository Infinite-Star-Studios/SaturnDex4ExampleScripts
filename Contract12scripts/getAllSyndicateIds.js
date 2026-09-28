#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getAllSyndicateIds — read (free, no wallet)
 * getAllSyndicateIds(): number*
 *
 * Generator yielding every syndicateId ever created.
 *
 * Returns number*: Iterable of syndicate IDs.
 *
 * Usage: node Contract12scripts/getAllSyndicateIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getAllSyndicateIds
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getAllSyndicateIds.js",
  contract: "saturnsyndicate",
  method: "getAllSyndicateIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getAllSyndicateIds",
});
