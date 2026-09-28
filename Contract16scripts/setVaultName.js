#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.setVaultName — write (signed transaction, needs PHANTASMA_WIF)
 * setVaultName(from: address, vaultId: number, name: string)
 *
 * The agent renames its vault, or names one made with createVault. Same rule
 * as createVaultV2: 1–40 characters of printable ASCII.
 *
 * Usage: node Contract16scripts/setVaultName.js <vaultId> <name>
 *   vaultId (number): A vault the agent runs, open or closed.
 *   name (string): New name, 1–40 printable ASCII characters.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-setVaultName
 */

const { send } = require("../common");

send({
  file: "Contract16scripts/setVaultName.js",
  contract: "saturnvaults",
  method: "setVaultName",
  params: [
    { name: "from", type: "address", desc: "The vault's agent (witness)." },
    { name: "vaultId", type: "number", desc: "A vault the agent runs, open or closed." },
    { name: "name", type: "string", desc: "New name, 1–40 printable ASCII characters." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnvaults-setVaultName",
});
