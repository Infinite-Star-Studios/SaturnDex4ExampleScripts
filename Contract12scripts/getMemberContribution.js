#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getMemberContribution — read (free, no wallet)
 * getMemberContribution(syndicateId: number, member: address): string
 *
 * Returns a single member's outstanding recorded contribution in both tokens.
 * Used by the 'My contribution' panel.
 *
 * Returns string: contribA:<raw>_contribB:<raw>
 *
 * Usage: node Contract12scripts/getMemberContribution.js <syndicateId> <member>
 *   syndicateId (number): The syndicate to inspect.
 *   member (address): The member address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getMemberContribution
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getMemberContribution.js",
  contract: "saturnsyndicate",
  method: "getMemberContribution",
  params: [
    { name: "syndicateId", type: "number", desc: "The syndicate to inspect." },
    { name: "member", type: "address", desc: "The member address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getMemberContribution",
});
