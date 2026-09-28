#!/usr/bin/env node
"use strict";

/**
 * saturnstakearb.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed version string for this contract.
 *
 * Returns string: Version identifier, e.g. "saturnstakearb-4.4.0".
 *
 * Usage: node Contract22scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnstakearb-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract22scripts/getContractVersion.js",
  contract: "saturnstakearb",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnstakearb-getContractVersion",
});
