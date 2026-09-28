#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestExpiresAt — read (free, no wallet)
 * getRequestExpiresAt(reqId: number): number
 *
 * Returns the Unix timestamp (seconds) when the request expires. Use for
 * countdown timers in the marketplace UI.
 *
 * Returns number: Unix expiry timestamp.
 *
 * Usage: node Lending6scripts/getRequestExpiresAt.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestExpiresAt
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestExpiresAt.js",
  contract: "saturnmarket",
  method: "getRequestExpiresAt",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestExpiresAt",
});
