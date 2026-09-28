#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getUserUnlockAt — read (free, no wallet)
 * getUserUnlockAt(vaultId: number, user: address): number
 *
 * Returns when user may withdraw from the vault: their latest deposit time +
 * the hold in force now.
 *
 * Returns number: Unix seconds; 0 when the user holds no shares or the vault
 * is closed. A time in the past means now.
 *
 * Usage: node Contract16scripts/getUserUnlockAt.js <vaultId> <user>
 *   vaultId (number): The vault to inspect.
 *   user (address): The depositor address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getUserUnlockAt
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getUserUnlockAt.js",
  contract: "saturnvaults",
  method: "getUserUnlockAt",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
    { name: "user", type: "address", desc: "The depositor address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getUserUnlockAt",
});
