#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMarketFeeBasis — read (free, no wallet)
 * getMarketFeeBasis(marketId: number): number
 *
 * Returns how metric 1 counts this market's fees (added in 4.1.8). 2 =
 * lifetime provider fees summed as stored, already in 8-decimal scaled units
 * (every market created on 4.1.8). 1 = lifetime fees scaled a second time
 * (markets from 4.1.x before 4.1.8). 0 = pending claimable fees scaled again
 * (the oldest markets). A market's snapshot, threshold and settlement always
 * use its own basis.
 *
 * Returns number: 0, 1 or 2.
 *
 * Usage: node Contract15scripts/getMarketFeeBasis.js <marketId>
 *   marketId (number): The market to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMarketFeeBasis
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMarketFeeBasis.js",
  contract: "saturnpredict",
  method: "getMarketFeeBasis",
  params: [
    { name: "marketId", type: "number", desc: "The market to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMarketFeeBasis",
});
