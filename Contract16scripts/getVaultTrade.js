#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultTrade — read (free, no wallet)
 * getVaultTrade(vaultId: number, index: number): string
 *
 * Returns one row of the vault's on-chain trade log (index is 0-based):
 * time|pools|route|baseIn|toDepositors|agentFee|sharePriceAfter|agentSharePer10k.
 *
 * Returns string: time = unix seconds; pools = "buy,sell" or
 * "pool1,pool2,pool3"; route = the risk token or "tokenX,tokenY"; baseIn,
 * toDepositors, agentFee = raw base token; sharePriceAfter = 8 decimals;
 * agentSharePer10k = the agent's own share of the vault at the trade, per
 * 10,000.
 *
 * Usage: node Contract16scripts/getVaultTrade.js <vaultId> <index>
 *   vaultId (number): The vault to inspect.
 *   index (number): Trade index, 0 … getVaultTradeCount − 1.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultTrade
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultTrade.js",
  contract: "saturnvaults",
  method: "getVaultTrade",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
    { name: "index", type: "number", desc: "Trade index, 0 … getVaultTradeCount − 1." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultTrade",
});
