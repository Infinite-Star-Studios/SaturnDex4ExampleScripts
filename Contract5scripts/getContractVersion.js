#!/usr/bin/env node
"use strict";

/**
 * saturnfees.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag of this contract. The mainnet and devnet
 * deployments documented here report "saturnfees-4.1.3". Compare it against
 * the value you developed against before trusting method semantics after an
 * upgrade.
 *
 * Returns string: Build tag, e.g. "saturnfees-4.1.3".
 *
 * Usage: node Contract5scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfees-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract5scripts/getContractVersion.js",
  contract: "saturnfees",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfees-getContractVersion",
});
