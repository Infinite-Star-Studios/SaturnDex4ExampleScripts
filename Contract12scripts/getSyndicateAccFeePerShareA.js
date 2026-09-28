#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateAccFeePerShareA — read (free, no wallet)
 * getSyndicateAccFeePerShareA(syndicateId: number): number
 *
 * MasterChef-style accumulator: raw tokenA fees harvested per unit of tokenA
 * contributed, times 10^12. A member's claimable tokenA is contribA *
 * accFeePerShareA / 10^12 − debtA. It only moves when a claimSyndicateReward
 * or executeDissolve harvests the pool's fees.
 *
 * Returns number: Scaled accumulator.
 *
 * Usage: node Contract12scripts/getSyndicateAccFeePerShareA.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateAccFeePerShareA
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateAccFeePerShareA.js",
  contract: "saturnsyndicate",
  method: "getSyndicateAccFeePerShareA",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateAccFeePerShareA",
});
