#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultTotalShares — read (free, no wallet)
 * getVaultTotalShares(vaultId: number): number
 *
 * Total shares outstanding. The first deposit mints amount × 10,000 shares, so
 * share amounts carry 4 more digits than the base token's raw units.
 *
 * Returns number: Total share supply.
 *
 * Usage: node Contract16scripts/getVaultTotalShares.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultTotalShares
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultTotalShares.js",
  contract: "saturnvaults",
  method: "getVaultTotalShares",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultTotalShares",
});
