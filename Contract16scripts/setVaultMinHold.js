#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.setVaultMinHold — write (signed transaction, needs PHANTASMA_WIF)
 * setVaultMinHold(from: address, vaultId: number, minHoldSeconds: number)
 *
 * The agent lowers its vault's hold time. The hold can only go down, and the
 * lower value applies only once the hold in force now has run from this call:
 * an agent cannot drop it to 0 and jump in and out of its own vault around a
 * trade, and depositors see the change coming. A second lowering replaces a
 * waiting one and waits again.
 *
 * Usage: node Contract16scripts/setVaultMinHold.js <vaultId> <minHoldSeconds>
 *   vaultId (number): A vault the agent runs.
 *   minHoldSeconds (number): New hold in seconds; >= 0 and below the hold in
 *   force now (getVaultMinHold).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-setVaultMinHold
 */

const { send } = require("../common");

send({
  file: "Contract16scripts/setVaultMinHold.js",
  contract: "saturnvaults",
  method: "setVaultMinHold",
  params: [
    { name: "from", type: "address", desc: "The vault's agent (witness)." },
    { name: "vaultId", type: "number", desc: "A vault the agent runs." },
    { name: "minHoldSeconds", type: "number", desc: "New hold in seconds; >= 0 and below the hold in force now (getVaultMinHold)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnvaults-setVaultMinHold",
});
