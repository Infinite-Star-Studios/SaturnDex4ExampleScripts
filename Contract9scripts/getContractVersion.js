#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag of this contract. The mainnet and devnet
 * deployments documented here report "saturnbonds-4.1.5". Compare it against
 * the value you developed against before trusting method semantics after an
 * upgrade.
 *
 * Returns string: Build tag, e.g. "saturnbonds-4.1.5".
 *
 * Usage: node Contract9scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getContractVersion.js",
  contract: "saturnbonds",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getContractVersion",
});
