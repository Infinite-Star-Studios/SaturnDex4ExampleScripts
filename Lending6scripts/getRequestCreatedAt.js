#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestCreatedAt — read (free, no wallet)
 * getRequestCreatedAt(reqId: number): number
 *
 * Returns the Unix timestamp (seconds) when the request was posted.
 *
 * Returns number: Unix timestamp of creation.
 *
 * Usage: node Lending6scripts/getRequestCreatedAt.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestCreatedAt
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestCreatedAt.js",
  contract: "saturnmarket",
  method: "getRequestCreatedAt",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestCreatedAt",
});
