#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultNextHold — read (free, no wallet)
 * getVaultNextHold(vaultId: number): number
 *
 * Returns the lower hold set by setVaultMinHold, in seconds.
 *
 * Returns number: Seconds.
 *
 * Usage: node Contract16scripts/getVaultNextHold.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultNextHold
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultNextHold.js",
  contract: "saturnvaults",
  method: "getVaultNextHold",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultNextHold",
});
