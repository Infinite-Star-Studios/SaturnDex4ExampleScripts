#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultProfitToOthers — read (free, no wallet)
 * getVaultProfitToOthers(vaultId: number): number
 *
 * Returns the profit added for depositors other than the agent: each trade's
 * depositors' part times the other depositors' fraction of the shares. An
 * agent that manufactures a profit with its own money (moving a pool it
 * provides, say) gets its fee and its own share of the rest back, so a record
 * built that way shows as next to nothing here.
 *
 * Returns number: Raw base token.
 *
 * Usage: node Contract16scripts/getVaultProfitToOthers.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultProfitToOthers
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultProfitToOthers.js",
  contract: "saturnvaults",
  method: "getVaultProfitToOthers",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultProfitToOthers",
});
