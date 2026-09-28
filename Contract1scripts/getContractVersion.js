#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag of this contract. The mainnet and devnet
 * deployments documented here report "saturnadmin-4.4.0". Compare it against
 * the value you developed against before trusting method semantics after an
 * upgrade.
 *
 * Returns string: Build tag, e.g. "saturnadmin-4.4.0".
 *
 * Usage: node Contract1scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getContractVersion.js",
  contract: "saturnadmin",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getContractVersion",
});
