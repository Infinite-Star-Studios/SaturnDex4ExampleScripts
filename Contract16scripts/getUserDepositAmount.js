#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getUserDepositAmount — read (free, no wallet)
 * getUserDepositAmount(vaultId: number, user: address): number
 *
 * Returns the total base token the user has ever deposited into the vault. It
 * is never reduced on withdrawal, so after a partial exit it is not a cost
 * basis.
 *
 * Returns number: Raw cumulative deposit amount.
 *
 * Usage: node Contract16scripts/getUserDepositAmount.js <vaultId> <user>
 *   vaultId (number): The vault to inspect.
 *   user (address): The depositor address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getUserDepositAmount
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getUserDepositAmount.js",
  contract: "saturnvaults",
  method: "getUserDepositAmount",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
    { name: "user", type: "address", desc: "The depositor address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getUserDepositAmount",
});
