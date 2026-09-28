#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestStatus — read (free, no wallet)
 * getRequestStatus(reqId: number): number
 *
 * Returns the current status of the request: 1 = open, 2 = accepted, 3 =
 * cancelled. The contract never writes 4 (expired): a request past
 * getRequestExpiresAt() still reads 1 (and still counts in
 * getTotalOpenRequests) but refuses new quotes, so compare the expiry
 * yourself.
 *
 * Returns number: 1 open | 2 accepted | 3 cancelled (4 is reserved and never
 * set).
 *
 * Usage: node Lending6scripts/getRequestStatus.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestStatus
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestStatus.js",
  contract: "saturnmarket",
  method: "getRequestStatus",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestStatus",
});
