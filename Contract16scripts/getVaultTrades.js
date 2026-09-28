#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultTrades — read (free, no wallet)
 * getVaultTrades(vaultId: number, start: number, count: number): string*
 *
 * Generator yielding up to count trade log rows from start (0-based), oldest
 * first, in the getVaultTrade format.
 *
 * Returns string*: Stream of
 * "time|pools|route|baseIn|toDepositors|agentFee|sharePriceAfter|agentSharePer10k"
 * rows.
 *
 * Usage: node Contract16scripts/getVaultTrades.js <vaultId> <start> <count>
 *   vaultId (number): The vault to inspect.
 *   start (number): First index; a negative value reads from 0.
 *   count (number): Most rows to return.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultTrades
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultTrades.js",
  contract: "saturnvaults",
  method: "getVaultTrades",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
    { name: "start", type: "number", desc: "First index; a negative value reads from 0." },
    { name: "count", type: "number", desc: "Most rows to return." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultTrades",
});
