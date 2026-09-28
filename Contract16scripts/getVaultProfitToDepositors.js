#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultProfitToDepositors — read (free, no wallet)
 * getVaultProfitToDepositors(vaultId: number): number
 *
 * Returns the total profit trades have added to the vault's NAV, after the
 * agent fee. It includes the part earned by the agent's own shares; see
 * getVaultProfitToOthers.
 *
 * Returns number: Raw base token.
 *
 * Usage: node Contract16scripts/getVaultProfitToDepositors.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultProfitToDepositors
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultProfitToDepositors.js",
  contract: "saturnvaults",
  method: "getVaultProfitToDepositors",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultProfitToDepositors",
});
