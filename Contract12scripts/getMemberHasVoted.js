#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getMemberHasVoted — read (free, no wallet)
 * getMemberHasVoted(syndicateId: number, member: address): number
 *
 * 1 if the member has already voted on the current proposal (the proposer
 * counts as having voted).
 *
 * Returns number: 1 or 0.
 *
 * Usage: node Contract12scripts/getMemberHasVoted.js <syndicateId> <member>
 *   syndicateId (number): Syndicate.
 *   member (address): Member wallet.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getMemberHasVoted
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getMemberHasVoted.js",
  contract: "saturnsyndicate",
  method: "getMemberHasVoted",
  params: [
    { name: "syndicateId", type: "number", desc: "Syndicate." },
    { name: "member", type: "address", desc: "Member wallet." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getMemberHasVoted",
});
