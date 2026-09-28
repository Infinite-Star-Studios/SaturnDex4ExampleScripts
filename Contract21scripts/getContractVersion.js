#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed version string for this contract.
 *
 * Returns string: Version identifier, e.g. "saturnholders-4.4.2" (mainnet and
 * devnet today).
 *
 * Usage: node Contract21scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getContractVersion.js",
  contract: "saturnholders",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getContractVersion",
});
