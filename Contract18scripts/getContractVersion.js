#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the current contract version string, useful for verifying on-chain
 * deployment matches your SDK expectations.
 *
 * Returns string: Version string. Mainnet and devnet report
 * "saturnclpools-4.2.6".
 *
 * Usage: node Contract18scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getContractVersion.js",
  contract: "saturnclpools",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getContractVersion",
});
