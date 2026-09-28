#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getUserShares — read (free, no wallet)
 * getUserShares(vaultId: number, user: address): number
 *
 * Returns a depositor's share balance in a vault.
 *
 * Returns number: Raw shares held.
 *
 * Usage: node Contract16scripts/getUserShares.js <vaultId> <user>
 *   vaultId (number): The vault to inspect.
 *   user (address): The depositor address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getUserShares
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getUserShares.js",
  contract: "saturnvaults",
  method: "getUserShares",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
    { name: "user", type: "address", desc: "The depositor address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getUserShares",
});
