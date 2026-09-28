#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultHighWaterMark — read (free, no wallet)
 * getVaultHighWaterMark(vaultId: number): number
 *
 * Legacy: the 4.1.x high-water mark. Unused since 4.2.0 (the agent's fee is
 * taken per trade); it stays at 10000.
 *
 * Returns number: Legacy value, normally 10000.
 *
 * Usage: node Contract16scripts/getVaultHighWaterMark.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultHighWaterMark
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultHighWaterMark.js",
  contract: "saturnvaults",
  method: "getVaultHighWaterMark",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultHighWaterMark",
});
