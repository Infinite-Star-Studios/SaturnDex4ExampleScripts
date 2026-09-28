#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultVolume — read (free, no wallet)
 * getVaultVolume(vaultId: number): number
 *
 * Returns the sum of baseIn over the vault's trades.
 *
 * Returns number: Raw base token.
 *
 * Usage: node Contract16scripts/getVaultVolume.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultVolume
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultVolume.js",
  contract: "saturnvaults",
  method: "getVaultVolume",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultVolume",
});
