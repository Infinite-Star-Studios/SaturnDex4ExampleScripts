#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultStatus — read (free, no wallet)
 * getVaultStatus(vaultId: number): number
 *
 * Returns the vault's lifecycle status.
 *
 * Returns number: 0 = active, 1 = closed.
 *
 * Usage: node Contract16scripts/getVaultStatus.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultStatus
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultStatus.js",
  contract: "saturnvaults",
  method: "getVaultStatus",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultStatus",
});
