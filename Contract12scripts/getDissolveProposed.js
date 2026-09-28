#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getDissolveProposed — read (free, no wallet)
 * getDissolveProposed(syndicateId: number): number
 *
 * 1 once a dissolution proposal has been opened, 0 before. It is never reset:
 * the proposal stays open until executeDissolve, and the flag stays 1 after
 * dissolution.
 *
 * Returns number: 1 or 0.
 *
 * Usage: node Contract12scripts/getDissolveProposed.js <syndicateId>
 *   syndicateId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getDissolveProposed
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getDissolveProposed.js",
  contract: "saturnsyndicate",
  method: "getDissolveProposed",
  params: [
    { name: "syndicateId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getDissolveProposed",
});
