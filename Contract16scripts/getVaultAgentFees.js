#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultAgentFees — read (free, no wallet)
 * getVaultAgentFees(vaultId: number): number
 *
 * Returns the total fees paid to the agent from trade profits.
 *
 * Returns number: Raw base token.
 *
 * Usage: node Contract16scripts/getVaultAgentFees.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultAgentFees
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultAgentFees.js",
  contract: "saturnvaults",
  method: "getVaultAgentFees",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultAgentFees",
});
