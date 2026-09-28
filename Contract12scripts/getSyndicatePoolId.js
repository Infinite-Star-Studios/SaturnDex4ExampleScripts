#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicatePoolId — read (free, no wallet)
 * getSyndicatePoolId(syndicateId: number): number
 *
 * Returns the poolId created by activateSyndicate, or 0 if not yet active.
 *
 * Returns number: Underlying pool ID or 0.
 *
 * Usage: node Contract12scripts/getSyndicatePoolId.js <syndicateId>
 *   syndicateId (number): The syndicate to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicatePoolId
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicatePoolId.js",
  contract: "saturnsyndicate",
  method: "getSyndicatePoolId",
  params: [
    { name: "syndicateId", type: "number", desc: "The syndicate to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicatePoolId",
});
