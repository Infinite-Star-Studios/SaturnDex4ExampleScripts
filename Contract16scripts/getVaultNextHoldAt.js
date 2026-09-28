#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultNextHoldAt — read (free, no wallet)
 * getVaultNextHoldAt(vaultId: number): number
 *
 * Returns when the lower hold set by setVaultMinHold applies.
 *
 * Returns number: Unix seconds; 0 = none set.
 *
 * Usage: node Contract16scripts/getVaultNextHoldAt.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultNextHoldAt
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultNextHoldAt.js",
  contract: "saturnvaults",
  method: "getVaultNextHoldAt",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultNextHoldAt",
});
