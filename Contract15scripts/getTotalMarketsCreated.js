#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getTotalMarketsCreated — read (free, no wallet)
 * getTotalMarketsCreated(): number
 *
 * Returns the cumulative number of markets created.
 *
 * Returns number: Cumulative market count.
 *
 * Usage: node Contract15scripts/getTotalMarketsCreated.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getTotalMarketsCreated
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getTotalMarketsCreated.js",
  contract: "saturnpredict",
  method: "getTotalMarketsCreated",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getTotalMarketsCreated",
});
