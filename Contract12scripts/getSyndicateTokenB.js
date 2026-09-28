#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateTokenB — read (free, no wallet)
 * getSyndicateTokenB(syndicateId: number): string
 *
 * Returns tokenB symbol for this syndicate.
 *
 * Returns string: tokenB symbol.
 *
 * Usage: node Contract12scripts/getSyndicateTokenB.js <syndicateId>
 *   syndicateId (number): The syndicate to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateTokenB
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateTokenB.js",
  contract: "saturnsyndicate",
  method: "getSyndicateTokenB",
  params: [
    { name: "syndicateId", type: "number", desc: "The syndicate to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateTokenB",
});
