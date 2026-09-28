#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultBaseToken — read (free, no wallet)
 * getVaultBaseToken(vaultId: number): string
 *
 * Returns the symbol of the vault's base token. Deposits, withdrawals, trades,
 * profit and the share price are all in this token.
 *
 * Returns string: Base token symbol; "" for an id that was never created.
 *
 * Usage: node Contract16scripts/getVaultBaseToken.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultBaseToken
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultBaseToken.js",
  contract: "saturnvaults",
  method: "getVaultBaseToken",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultBaseToken",
});
