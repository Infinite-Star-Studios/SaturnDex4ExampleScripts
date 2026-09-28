#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag of this contract. The mainnet and devnet
 * deployments documented here report "saturnrental-4.1.2". Compare it against
 * the value you developed against before trusting method semantics after an
 * upgrade.
 *
 * Returns string: Build tag, e.g. "saturnrental-4.1.2".
 *
 * Usage: node Contract10scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getContractVersion.js",
  contract: "saturnrental",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getContractVersion",
});
