#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getNextVaultId — read (free, no wallet)
 * getNextVaultId(): number
 *
 * Returns the id the next createVault / createVaultV2 call will get. Ids start
 * at 1.
 *
 * Returns number: Next vault id.
 *
 * Usage: node Contract16scripts/getNextVaultId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getNextVaultId
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getNextVaultId.js",
  contract: "saturnvaults",
  method: "getNextVaultId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getNextVaultId",
});
