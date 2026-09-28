#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getDissolveEarliestExecute — read (free, no wallet)
 * getDissolveEarliestExecute(syndicateId: number): number
 *
 * proposedAt + 259,200 s (72 h): the earliest time executeDissolve() can
 * succeed. 0 until a proposal has been opened.
 *
 * Returns number: Unix seconds or 0.
 *
 * Usage: node Contract12scripts/getDissolveEarliestExecute.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getDissolveEarliestExecute
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getDissolveEarliestExecute.js",
  contract: "saturnsyndicate",
  method: "getDissolveEarliestExecute",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getDissolveEarliestExecute",
});
