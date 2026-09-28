#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateStatus — read (free, no wallet)
 * getSyndicateStatus(syndicateId: number): number
 *
 * Returns the lifecycle status code.
 *
 * Returns number: 0=funding, 1=active, 2=dissolved, 3=cancelled.
 *
 * Usage: node Contract12scripts/getSyndicateStatus.js <syndicateId>
 *   syndicateId (number): The syndicate to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateStatus
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateStatus.js",
  contract: "saturnsyndicate",
  method: "getSyndicateStatus",
  params: [
    { name: "syndicateId", type: "number", desc: "The syndicate to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateStatus",
});
