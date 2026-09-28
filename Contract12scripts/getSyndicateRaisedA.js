#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateRaisedA — read (free, no wallet)
 * getSyndicateRaisedA(syndicateId: number): number
 *
 * Returns total raw tokenA raised so far.
 *
 * Returns number: Raised tokenA (raw).
 *
 * Usage: node Contract12scripts/getSyndicateRaisedA.js <syndicateId>
 *   syndicateId (number): The syndicate to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateRaisedA
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateRaisedA.js",
  contract: "saturnsyndicate",
  method: "getSyndicateRaisedA",
  params: [
    { name: "syndicateId", type: "number", desc: "The syndicate to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateRaisedA",
});
