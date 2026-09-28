#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getNextCollateralId — read (free, no wallet)
 * getNextCollateralId(): number
 *
 * Returns the ID that will be assigned to the next deposited collateral
 * position. Collateral IDs are auto-incrementing from 1. Use this to predict
 * the incoming ID before a deposit, or to iterate all positions from 1 to
 * nextCollateralId - 1.
 *
 * Returns number: Next collateral ID (1-based, auto-incremented).
 *
 * Usage: node Lending3scripts/getNextCollateralId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getNextCollateralId
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getNextCollateralId.js",
  contract: "saturnvault",
  method: "getNextCollateralId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getNextCollateralId",
});
