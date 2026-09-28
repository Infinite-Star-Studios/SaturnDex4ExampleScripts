#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getTotalBetsPlaced — read (free, no wallet)
 * getTotalBetsPlaced(): number
 *
 * Returns the cumulative number of betOver + betUnder calls across all
 * markets.
 *
 * Returns number: Cumulative bet count.
 *
 * Usage: node Contract15scripts/getTotalBetsPlaced.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getTotalBetsPlaced
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getTotalBetsPlaced.js",
  contract: "saturnpredict",
  method: "getTotalBetsPlaced",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getTotalBetsPlaced",
});
