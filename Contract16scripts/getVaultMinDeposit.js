#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultMinDeposit — read (free, no wallet)
 * getVaultMinDeposit(vaultId: number): number
 *
 * Returns the minimum raw amount per deposit.
 *
 * Returns number: Raw base token.
 *
 * Usage: node Contract16scripts/getVaultMinDeposit.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultMinDeposit
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultMinDeposit.js",
  contract: "saturnvaults",
  method: "getVaultMinDeposit",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultMinDeposit",
});
