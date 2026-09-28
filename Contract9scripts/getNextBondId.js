#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getNextBondId — read (free, no wallet)
 * getNextBondId(): number
 *
 * ID that will be assigned to the next bond listed.
 *
 * Returns number: Next bond ID (starts at 1).
 *
 * Usage: node Contract9scripts/getNextBondId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getNextBondId
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getNextBondId.js",
  contract: "saturnbonds",
  method: "getNextBondId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getNextBondId",
});
