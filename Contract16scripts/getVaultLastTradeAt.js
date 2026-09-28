#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultLastTradeAt — read (free, no wallet)
 * getVaultLastTradeAt(vaultId: number): number
 *
 * Returns the time of the vault's last trade.
 *
 * Returns number: Unix seconds; 0 if the vault has not traded.
 *
 * Usage: node Contract16scripts/getVaultLastTradeAt.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultLastTradeAt
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultLastTradeAt.js",
  contract: "saturnvaults",
  method: "getVaultLastTradeAt",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultLastTradeAt",
});
