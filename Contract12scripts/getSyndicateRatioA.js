#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateRatioA — read (free, no wallet)
 * getSyndicateRatioA(syndicateId: number): number
 *
 * tokenA side of the declared contribution ratio.
 *
 * Returns number: Ratio numerator.
 *
 * Usage: node Contract12scripts/getSyndicateRatioA.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateRatioA
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateRatioA.js",
  contract: "saturnsyndicate",
  method: "getSyndicateRatioA",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateRatioA",
});
