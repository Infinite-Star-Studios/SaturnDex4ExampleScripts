#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getNextSyndicateId — read (free, no wallet)
 * getNextSyndicateId(): number
 *
 * Returns the syndicateId that will be assigned to the next createSyndicateV2
 * call.
 *
 * Returns number: Next syndicate ID (starts at 1).
 *
 * Usage: node Contract12scripts/getNextSyndicateId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getNextSyndicateId
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getNextSyndicateId.js",
  contract: "saturnsyndicate",
  method: "getNextSyndicateId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getNextSyndicateId",
});
