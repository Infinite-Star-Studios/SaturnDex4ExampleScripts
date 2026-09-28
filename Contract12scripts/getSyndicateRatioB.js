#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateRatioB — read (free, no wallet)
 * getSyndicateRatioB(syndicateId: number): number
 *
 * tokenB side of the declared contribution ratio. A contribution must satisfy
 * amountA * ratioB == amountB * ratioA.
 *
 * Returns number: Ratio numerator.
 *
 * Usage: node Contract12scripts/getSyndicateRatioB.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateRatioB
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateRatioB.js",
  contract: "saturnsyndicate",
  method: "getSyndicateRatioB",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateRatioB",
});
