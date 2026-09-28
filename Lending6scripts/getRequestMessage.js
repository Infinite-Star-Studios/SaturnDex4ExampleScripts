#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestMessage — read (free, no wallet)
 * getRequestMessage(reqId: number): string
 *
 * Returns the borrower's optional freeform message attached to the request.
 *
 * Returns string: Freeform note from the borrower. May be empty.
 *
 * Usage: node Lending6scripts/getRequestMessage.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestMessage
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestMessage.js",
  contract: "saturnmarket",
  method: "getRequestMessage",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestMessage",
});
