#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultStats — read (free, no wallet)
 * getVaultStats(vaultId: number): string
 *
 * Everything about one vault in one call, 22 pipe-separated fields:
 * vaultId|agent|baseToken|totalDeposits|totalShares|sharePrice|perfFee|status|minDeposit|minHold|createdAt|trades|volume|profitToDepositors|agentFees|lastTradeAt|depositors|agentShares|profitToOthers|nextHold|nextHoldAt|name.
 *
 * Returns string: sharePrice has 8 decimals; perfFee is per 10,000; status 0 =
 * active, 1 = closed; minHold is the hold in force now and nextHold /
 * nextHoldAt a lower one still waiting (nextHoldAt 0 or past: none);
 * agentShares is the agent's own share balance; amounts are raw base token;
 * times are unix seconds.
 *
 * Usage: node Contract16scripts/getVaultStats.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultStats
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultStats.js",
  contract: "saturnvaults",
  method: "getVaultStats",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultStats",
});
