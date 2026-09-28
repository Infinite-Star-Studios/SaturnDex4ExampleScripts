#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag of this contract. The mainnet and devnet
 * deployments documented here report "saturnrouter-4.1.1". Compare it against
 * the value you developed against before trusting method semantics after an
 * upgrade.
 *
 * Returns string: Build tag, e.g. "saturnrouter-4.1.1".
 *
 * Usage: node Contract8scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getContractVersion.js",
  contract: "saturnrouter",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getContractVersion",
});
