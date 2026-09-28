#!/usr/bin/env node
"use strict";

/**
 * saturnflash.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed version string for this contract.
 *
 * Returns string: Version identifier, e.g. "saturnflash-4.2.4".
 *
 * Usage: node Contract20scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract20scripts/getContractVersion.js",
  contract: "saturnflash",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnflash-getContractVersion",
});
