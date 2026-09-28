#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateTokenA — read (free, no wallet)
 * getSyndicateTokenA(syndicateId: number): string
 *
 * Returns tokenA symbol for this syndicate.
 *
 * Returns string: tokenA symbol.
 *
 * Usage: node Contract12scripts/getSyndicateTokenA.js <syndicateId>
 *   syndicateId (number): The syndicate to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateTokenA
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateTokenA.js",
  contract: "saturnsyndicate",
  method: "getSyndicateTokenA",
  params: [
    { name: "syndicateId", type: "number", desc: "The syndicate to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateTokenA",
});
