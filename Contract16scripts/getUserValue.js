#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getUserValue — read (free, no wallet)
 * getUserValue(vaultId: number, user: address): number
 *
 * Returns what user would receive for all their shares now: shares ×
 * totalDeposits / totalShares.
 *
 * Returns number: Raw base token; 0 without shares.
 *
 * Usage: node Contract16scripts/getUserValue.js <vaultId> <user>
 *   vaultId (number): The vault to inspect.
 *   user (address): The depositor address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getUserValue
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getUserValue.js",
  contract: "saturnvaults",
  method: "getUserValue",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
    { name: "user", type: "address", desc: "The depositor address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getUserValue",
});
