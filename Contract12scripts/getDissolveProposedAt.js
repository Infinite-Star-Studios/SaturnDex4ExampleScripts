#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getDissolveProposedAt — read (free, no wallet)
 * getDissolveProposedAt(syndicateId: number): number
 *
 * Unix time the open proposal was created; 0 when none.
 *
 * Returns number: Unix seconds or 0.
 *
 * Usage: node Contract12scripts/getDissolveProposedAt.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getDissolveProposedAt
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getDissolveProposedAt.js",
  contract: "saturnsyndicate",
  method: "getDissolveProposedAt",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getDissolveProposedAt",
});
