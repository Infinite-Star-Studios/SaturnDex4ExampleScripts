#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateAccFeePerShareB — read (free, no wallet)
 * getSyndicateAccFeePerShareB(syndicateId: number): number
 *
 * tokenB counterpart of getSyndicateAccFeePerShareA().
 *
 * Returns number: Scaled accumulator.
 *
 * Usage: node Contract12scripts/getSyndicateAccFeePerShareB.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateAccFeePerShareB
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateAccFeePerShareB.js",
  contract: "saturnsyndicate",
  method: "getSyndicateAccFeePerShareB",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateAccFeePerShareB",
});
