#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultNavPerShare — read (free, no wallet)
 * getVaultNavPerShare(vaultId: number): number
 *
 * Legacy: totalDeposits × 10,000 / totalShares as a whole number. Because the
 * first deposit mints amount × 10,000 shares, it reads the share price rounded
 * down to an integer (1 for a new vault). Use getVaultSharePrice (8 decimals)
 * instead.
 *
 * Returns number: Legacy value; 10000 when the vault has no shares.
 *
 * Usage: node Contract16scripts/getVaultNavPerShare.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultNavPerShare
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultNavPerShare.js",
  contract: "saturnvaults",
  method: "getVaultNavPerShare",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultNavPerShare",
});
