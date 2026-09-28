#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag. Mainnet and devnet report
 * "saturnlplock-1.0.0".
 *
 * Returns string: Build tag, e.g. "saturnlplock-1.0.0".
 *
 * Usage: node Contract23scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getContractVersion.js",
  contract: "saturnlplock",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getContractVersion",
});
