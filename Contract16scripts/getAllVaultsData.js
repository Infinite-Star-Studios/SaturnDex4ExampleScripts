#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getAllVaultsData — read (free, no wallet)
 * getAllVaultsData(): string*
 *
 * Legacy batch view, layout unchanged: one row per vault,
 * vaultId|agent|baseToken|totalDeposits|totalShares|highWaterMark|perfFeePer10k|status.
 * highWaterMark is unused since 4.2.0. getAllVaultsStats returns 22 fields per
 * vault, including the share price, hold time and trade counters.
 *
 * Returns string*: Stream of
 * "vaultId|agent|baseToken|totalDeposits|totalShares|highWaterMark|perfFeePer10k|status"
 * rows.
 *
 * Usage: node Contract16scripts/getAllVaultsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getAllVaultsData
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getAllVaultsData.js",
  contract: "saturnvaults",
  method: "getAllVaultsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getAllVaultsData",
});
