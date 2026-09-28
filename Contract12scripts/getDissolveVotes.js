#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getDissolveVotes — read (free, no wallet)
 * getDissolveVotes(syndicateId: number): number
 *
 * Cumulative tokenA share weight that has voted for the open proposal. It
 * passes when votes * 2 > getSyndicateRaisedA().
 *
 * Returns number: Raw tokenA weight.
 *
 * Usage: node Contract12scripts/getDissolveVotes.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getDissolveVotes
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getDissolveVotes.js",
  contract: "saturnsyndicate",
  method: "getDissolveVotes",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getDissolveVotes",
});
