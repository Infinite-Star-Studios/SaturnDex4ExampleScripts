#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateDissolvedResB — read (free, no wallet)
 * getSyndicateDissolvedResB(syndicateId: number): number
 *
 * Raw tokenB recovered at dissolution. 0 until dissolved.
 *
 * Returns number: Raw tokenB.
 *
 * Usage: node Contract12scripts/getSyndicateDissolvedResB.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateDissolvedResB
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateDissolvedResB.js",
  contract: "saturnsyndicate",
  method: "getSyndicateDissolvedResB",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateDissolvedResB",
});
