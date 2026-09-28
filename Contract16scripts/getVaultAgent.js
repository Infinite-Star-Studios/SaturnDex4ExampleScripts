#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultAgent — read (free, no wallet)
 * getVaultAgent(vaultId: number): address
 *
 * Returns the vault's agent: its creator, the only address that can call
 * agentArb, agentArb3, setVaultName, setVaultMinHold and closeVault. It cannot
 * be changed.
 *
 * Returns address: The vault's agent.
 *
 * Usage: node Contract16scripts/getVaultAgent.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultAgent
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultAgent.js",
  contract: "saturnvaults",
  method: "getVaultAgent",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultAgent",
});
