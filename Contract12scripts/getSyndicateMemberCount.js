#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateMemberCount — read (free, no wallet)
 * getSyndicateMemberCount(syndicateId: number): number
 *
 * Returns the number of distinct contributors. contribute adds 1 for a new
 * member and withdrawContribution subtracts 1; claimDissolution does not
 * change it, so after a dissolution it still counts members who have claimed.
 *
 * Returns number: Active member count.
 *
 * Usage: node Contract12scripts/getSyndicateMemberCount.js <syndicateId>
 *   syndicateId (number): The syndicate to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateMemberCount
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateMemberCount.js",
  contract: "saturnsyndicate",
  method: "getSyndicateMemberCount",
  params: [
    { name: "syndicateId", type: "number", desc: "The syndicate to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateMemberCount",
});
