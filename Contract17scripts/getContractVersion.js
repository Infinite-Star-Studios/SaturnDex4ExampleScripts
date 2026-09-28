#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the contract version string. Use to verify which deployment you are
 * talking to.
 *
 * Returns string: Build tag. Mainnet and devnet report
 * "saturnlaunchpad-4.1.5".
 *
 * Usage: node Contract17scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getContractVersion.js",
  contract: "saturnlaunchpad",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getContractVersion",
});
