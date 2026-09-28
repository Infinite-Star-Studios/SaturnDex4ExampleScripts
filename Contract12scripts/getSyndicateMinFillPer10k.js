#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateMinFillPer10k — read (free, no wallet)
 * getSyndicateMinFillPer10k(syndicateId: number): number
 *
 * Minimum fill (per 10k) of both targets required before the creator may
 * activate.
 *
 * Returns number: 1000..10000.
 *
 * Usage: node Contract12scripts/getSyndicateMinFillPer10k.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateMinFillPer10k
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateMinFillPer10k.js",
  contract: "saturnsyndicate",
  method: "getSyndicateMinFillPer10k",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateMinFillPer10k",
});
