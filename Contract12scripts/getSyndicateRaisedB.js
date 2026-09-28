#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateRaisedB — read (free, no wallet)
 * getSyndicateRaisedB(syndicateId: number): number
 *
 * Returns total raw tokenB raised so far.
 *
 * Returns number: Raised tokenB (raw).
 *
 * Usage: node Contract12scripts/getSyndicateRaisedB.js <syndicateId>
 *   syndicateId (number): The syndicate to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateRaisedB
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateRaisedB.js",
  contract: "saturnsyndicate",
  method: "getSyndicateRaisedB",
  params: [
    { name: "syndicateId", type: "number", desc: "The syndicate to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateRaisedB",
});
