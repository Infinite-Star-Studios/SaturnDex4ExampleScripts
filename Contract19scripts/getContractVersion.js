#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the current TWAMM contract version string. Mainnet and devnet report
 * saturntwamm-4.2.4; the floor and dust rules on this page need 4.2.4.
 *
 * Returns string: Version string, e.g. "saturntwamm-4.2.4".
 *
 * Usage: node Contract19scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getContractVersion.js",
  contract: "saturntwamm",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getContractVersion",
});
