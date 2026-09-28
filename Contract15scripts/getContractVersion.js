#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag of this contract. The mainnet and devnet
 * deployments documented here report "saturnpredict-4.1.8". Compare it against
 * the value you developed against before trusting method semantics after an
 * upgrade.
 *
 * Returns string: Build tag, e.g. "saturnpredict-4.1.8".
 *
 * Usage: node Contract15scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getContractVersion.js",
  contract: "saturnpredict",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getContractVersion",
});
