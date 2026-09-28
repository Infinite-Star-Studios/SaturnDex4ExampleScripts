#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.deposit — write (signed transaction, needs PHANTASMA_WIF)
 * deposit(from: address, vaultId: number, amount: number)
 *
 * Deposits the vault's base token and mints shares at the current share price.
 * The first deposit into an empty vault mints amount × 10,000 shares (share
 * price 1.0); later deposits mint amount × totalShares / totalDeposits. Every
 * deposit restarts the depositor's hold time for the whole position, so a
 * top-up locks the older shares again too. The agent may deposit into its own
 * vault like anyone else.
 *
 * Usage: node Contract16scripts/deposit.js <vaultId> <amount>
 *   vaultId (number): An active vault (status 0).
 *   amount (number): Raw base token to deposit; must be >=
 *   getVaultMinDeposit(vaultId).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-deposit
 */

const { send } = require("../common");

send({
  file: "Contract16scripts/deposit.js",
  contract: "saturnvaults",
  method: "deposit",
  params: [
    { name: "from", type: "address", desc: "Depositor (witness) holding at least amount of the base token." },
    { name: "vaultId", type: "number", desc: "An active vault (status 0)." },
    { name: "amount", type: "number", desc: "Raw base token to deposit; must be >= getVaultMinDeposit(vaultId)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnvaults-deposit",
});
