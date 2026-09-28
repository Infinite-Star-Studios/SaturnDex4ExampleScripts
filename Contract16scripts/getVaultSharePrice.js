#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultSharePrice — read (free, no wallet)
 * getVaultSharePrice(vaultId: number): number
 *
 * Value of one share in base token with 8 decimals (100000000 = 1.0):
 * totalDeposits × 10^12 / totalShares. It starts at 1.0 and never falls:
 * trades only add to it, and deposits and withdrawals leave it unchanged
 * (rounding can only nudge it up).
 *
 * Returns number: Share price, 8 decimals; 100000000 when the vault has no
 * shares.
 *
 * Usage: node Contract16scripts/getVaultSharePrice.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultSharePrice
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultSharePrice.js",
  contract: "saturnvaults",
  method: "getVaultSharePrice",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultSharePrice",
});
