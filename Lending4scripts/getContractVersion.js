#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag. Mainnet and devnet report
 * "saturnloans-1.0.3".
 *
 * Returns string: Build tag, e.g. "saturnloans-1.0.3".
 *
 * Usage: node Lending4scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getContractVersion.js",
  contract: "saturnloans",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getContractVersion",
});
