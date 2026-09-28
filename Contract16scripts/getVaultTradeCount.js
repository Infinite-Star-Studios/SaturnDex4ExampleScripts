#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultTradeCount — read (free, no wallet)
 * getVaultTradeCount(vaultId: number): number
 *
 * Returns the number of trades (agentArb / agentArb3) booked for the vault.
 * Round trips made before 4.2.0 are not counted.
 *
 * Returns number: Trade count; also the index of the next trade log row.
 *
 * Usage: node Contract16scripts/getVaultTradeCount.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultTradeCount
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultTradeCount.js",
  contract: "saturnvaults",
  method: "getVaultTradeCount",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultTradeCount",
});
