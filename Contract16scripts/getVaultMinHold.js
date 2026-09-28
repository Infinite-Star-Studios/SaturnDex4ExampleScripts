#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultMinHold — read (free, no wallet)
 * getVaultMinHold(vaultId: number): number
 *
 * Returns the hold time in force now, in seconds (0 = withdraw any time). A
 * lowered hold counts once its wait is over.
 *
 * Returns number: Seconds each deposit must stay.
 *
 * Usage: node Contract16scripts/getVaultMinHold.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultMinHold
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultMinHold.js",
  contract: "saturnvaults",
  method: "getVaultMinHold",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultMinHold",
});
