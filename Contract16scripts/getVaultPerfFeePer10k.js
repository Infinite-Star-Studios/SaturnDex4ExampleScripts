#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultPerfFeePer10k — read (free, no wallet)
 * getVaultPerfFeePer10k(vaultId: number): number
 *
 * The agent's cut of each trade's profit, per 10,000 (100–3000 = 1–30%). Fixed
 * when the vault is created.
 *
 * Returns number: Performance fee, per 10,000.
 *
 * Usage: node Contract16scripts/getVaultPerfFeePer10k.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultPerfFeePer10k
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultPerfFeePer10k.js",
  contract: "saturnvaults",
  method: "getVaultPerfFeePer10k",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultPerfFeePer10k",
});
