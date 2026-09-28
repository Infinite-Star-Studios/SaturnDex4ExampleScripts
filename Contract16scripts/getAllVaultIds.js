#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getAllVaultIds — read (free, no wallet)
 * getAllVaultIds(): number*
 *
 * Generator yielding every vault id ever created, in creation order.
 *
 * Returns number*: Iterable of vault ids.
 *
 * Usage: node Contract16scripts/getAllVaultIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getAllVaultIds
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getAllVaultIds.js",
  contract: "saturnvaults",
  method: "getAllVaultIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getAllVaultIds",
});
