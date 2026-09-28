#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getFeeSplitRatios — read (free, no wallet)
 * getFeeSplitRatios(): string
 *
 * Returns all four fee split percentages packed into a single string of the
 * form "reinvest:X_provider:Y_admin:Z_holder:H". Convenient for single-call
 * rendering of the complete fee split. The holder slice is credited to the
 * saturnholders stakers of the swap's input token; since saturnswap-4.4.3 it
 * stays in the pool as reinvest when nobody stakes that token.
 *
 * Returns string: Mainnet and devnet today:
 * "reinvest:60_provider:10_admin:20_holder:10" — whole percentages that sum to
 * 100.
 *
 * Usage: node Contract1scripts/getFeeSplitRatios.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getFeeSplitRatios
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getFeeSplitRatios.js",
  contract: "saturnadmin",
  method: "getFeeSplitRatios",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getFeeSplitRatios",
});
