#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.closeVault — write (signed transaction, needs PHANTASMA_WIF)
 * closeVault(from: address, vaultId: number)
 *
 * The agent closes its vault for good (there is no reopen). Closing stops
 * deposits and trades and releases every depositor from the hold: withdrawV2
 * works at once, at the current share price.
 *
 * Usage: node Contract16scripts/closeVault.js <vaultId>
 *   vaultId (number): An active vault.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-closeVault
 */

const { send } = require("../common");

send({
  file: "Contract16scripts/closeVault.js",
  contract: "saturnvaults",
  method: "closeVault",
  params: [
    { name: "from", type: "address", desc: "The vault's agent (witness)." },
    { name: "vaultId", type: "number", desc: "An active vault." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnvaults-closeVault",
});
