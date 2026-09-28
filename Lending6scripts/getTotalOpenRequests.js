#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getTotalOpenRequests — read (free, no wallet)
 * getTotalOpenRequests(): number
 *
 * Live count of requests currently in status 1 (open). Use for marketplace
 * summary stats.
 *
 * Returns number: Number of open loan requests.
 *
 * Usage: node Lending6scripts/getTotalOpenRequests.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getTotalOpenRequests
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getTotalOpenRequests.js",
  contract: "saturnmarket",
  method: "getTotalOpenRequests",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getTotalOpenRequests",
});
