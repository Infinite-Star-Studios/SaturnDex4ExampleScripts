#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getAllVaultsStats — read (free, no wallet)
 * getAllVaultsStats(): string*
 *
 * Generator yielding one getVaultStats row per vault ever created, in id
 * order, closed vaults included.
 *
 * Returns string*: Stream of 22-field getVaultStats rows.
 *
 * Usage: node Contract16scripts/getAllVaultsStats.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getAllVaultsStats
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getAllVaultsStats.js",
  contract: "saturnvaults",
  method: "getAllVaultsStats",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getAllVaultsStats",
});
