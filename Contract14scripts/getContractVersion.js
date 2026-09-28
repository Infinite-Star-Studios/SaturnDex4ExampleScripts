#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag of this contract. The mainnet and devnet
 * deployments documented here report "saturnlimit-4.1.4". A deployment that
 * still reports "saturnlimit-4.1.3" accepts a negative bountyPer10k and does
 * not check the swap minimum at placement. Compare it against the value you
 * developed against before trusting method semantics after an upgrade.
 *
 * Returns string: Build tag, e.g. "saturnlimit-4.1.4".
 *
 * Usage: node Contract14scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getContractVersion.js",
  contract: "saturnlimit",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getContractVersion",
});
