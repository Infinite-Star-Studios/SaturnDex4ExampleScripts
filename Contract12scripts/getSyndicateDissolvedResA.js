#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateDissolvedResA — read (free, no wallet)
 * getSyndicateDissolvedResA(syndicateId: number): number
 *
 * Raw tokenA recovered from the pool at executeDissolve(); members receive
 * contribA / raisedA of it through claimDissolution(). 0 until dissolved.
 *
 * Returns number: Raw tokenA.
 *
 * Usage: node Contract12scripts/getSyndicateDissolvedResA.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateDissolvedResA
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateDissolvedResA.js",
  contract: "saturnsyndicate",
  method: "getSyndicateDissolvedResA",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateDissolvedResA",
});
