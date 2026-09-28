#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag of this contract. The mainnet and devnet
 * deployments documented here report "saturnpools-4.1.10". Compare it against
 * the value you developed against before trusting method semantics after an
 * upgrade.
 *
 * Returns string: Build tag, e.g. "saturnpools-4.1.10".
 *
 * Usage: node Contract2scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getContractVersion.js",
  contract: "saturnpools",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getContractVersion",
});
