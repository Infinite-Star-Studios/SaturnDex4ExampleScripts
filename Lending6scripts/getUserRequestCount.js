#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getUserRequestCount — read (free, no wallet)
 * getUserRequestCount(user: address): number
 *
 * Returns the total number of loan requests ever posted by this address
 * (includes cancelled and accepted ones). Use as the upper bound when
 * iterating getUserRequestAtIndex.
 *
 * Returns number: Total request count for this user.
 *
 * Usage: node Lending6scripts/getUserRequestCount.js <user>
 *   user (address): Borrower address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getUserRequestCount
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getUserRequestCount.js",
  contract: "saturnmarket",
  method: "getUserRequestCount",
  params: [
    { name: "user", type: "address", desc: "Borrower address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getUserRequestCount",
});
