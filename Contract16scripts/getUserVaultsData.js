#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getUserVaultsData — read (free, no wallet)
 * getUserVaultsData(user: address): string*
 *
 * Same legacy row layout as getAllVaultsData, for the vaults in which user
 * holds shares: a depositor's portfolio in one call.
 *
 * Returns string*: Stream of
 * "vaultId|agent|baseToken|totalDeposits|totalShares|highWaterMark|perfFeePer10k|status"
 * rows.
 *
 * Usage: node Contract16scripts/getUserVaultsData.js <user>
 *   user (address): Depositor wallet.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getUserVaultsData
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getUserVaultsData.js",
  contract: "saturnvaults",
  method: "getUserVaultsData",
  params: [
    { name: "user", type: "address", desc: "Depositor wallet." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getUserVaultsData",
});
