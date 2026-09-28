#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getTotalVaultsCreated — read (free, no wallet)
 * getTotalVaultsCreated(): number
 *
 * Returns the number of vaults ever created, closed ones included.
 *
 * Returns number: Cumulative vault count.
 *
 * Usage: node Contract16scripts/getTotalVaultsCreated.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getTotalVaultsCreated
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getTotalVaultsCreated.js",
  contract: "saturnvaults",
  method: "getTotalVaultsCreated",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getTotalVaultsCreated",
});
