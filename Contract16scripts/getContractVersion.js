#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag. The deployments documented here report
 * "saturnvaults-4.2.0". A deployment that still reports "saturnvaults-4.1.3"
 * has none of the methods added in 4.2.0 (createVaultV2 onward) and still runs
 * agentRoundTrip and the high-water-mark fee, so check this before relying on
 * them.
 *
 * Returns string: Build tag, e.g. "saturnvaults-4.2.0".
 *
 * Usage: node Contract16scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getContractVersion.js",
  contract: "saturnvaults",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getContractVersion",
});
