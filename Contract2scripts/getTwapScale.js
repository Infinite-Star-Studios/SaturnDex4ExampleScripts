#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getTwapScale — read (free, no wallet)
 * getTwapScale(): number
 *
 * The scale of every TWAP price: 10^18.
 *
 * Returns number: 1000000000000000000.
 *
 * Usage: node Contract2scripts/getTwapScale.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getTwapScale
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getTwapScale.js",
  contract: "saturnpools",
  method: "getTwapScale",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getTwapScale",
});
