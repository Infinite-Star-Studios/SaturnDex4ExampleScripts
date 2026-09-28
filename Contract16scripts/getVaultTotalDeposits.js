#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultTotalDeposits — read (free, no wallet)
 * getVaultTotalDeposits(vaultId: number): number
 *
 * The vault's NAV in raw base token as booked by the contract: deposits −
 * withdrawals + the depositors' part of every trade's profit. Agent fees are
 * already paid out and not included. It is also the most one trade may put in
 * (baseIn <= this).
 *
 * Returns number: Raw NAV in base token.
 *
 * Usage: node Contract16scripts/getVaultTotalDeposits.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultTotalDeposits
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultTotalDeposits.js",
  contract: "saturnvaults",
  method: "getVaultTotalDeposits",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultTotalDeposits",
});
