#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultName — read (free, no wallet)
 * getVaultName(vaultId: number): string
 *
 * Returns the vault's name.
 *
 * Returns string: Name; "" for a vault made with createVault and never
 * renamed.
 *
 * Usage: node Contract16scripts/getVaultName.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultName
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultName.js",
  contract: "saturnvaults",
  method: "getVaultName",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultName",
});
