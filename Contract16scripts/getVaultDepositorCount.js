#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultDepositorCount — read (free, no wallet)
 * getVaultDepositorCount(vaultId: number): number
 *
 * Returns the number of addresses holding shares in the vault.
 *
 * Returns number: Depositor count.
 *
 * Usage: node Contract16scripts/getVaultDepositorCount.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultDepositorCount
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultDepositorCount.js",
  contract: "saturnvaults",
  method: "getVaultDepositorCount",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultDepositorCount",
});
