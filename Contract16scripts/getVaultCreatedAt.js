#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultCreatedAt — read (free, no wallet)
 * getVaultCreatedAt(vaultId: number): number
 *
 * Returns when the vault was created.
 *
 * Returns number: Unix seconds.
 *
 * Usage: node Contract16scripts/getVaultCreatedAt.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultCreatedAt
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultCreatedAt.js",
  contract: "saturnvaults",
  method: "getVaultCreatedAt",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultCreatedAt",
});
