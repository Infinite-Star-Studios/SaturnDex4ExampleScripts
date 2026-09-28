#!/usr/bin/env node
"use strict";

/**
 * SATURN.getOwner — read (free, no wallet)
 * getOwner(): address
 *
 * Owner of the SATURN token contract: the wallet allowed to upgrade it
 * (onUpgrade) and to infuse certificates (onInfuse). Today it is the same
 * wallet as saturnadmin.getAdmin() on mainnet and devnet, but it is stored
 * separately: saturnadmin.updateAdmin does not change it.
 *
 * Returns address: SATURN owner wallet.
 *
 * Usage: node Contract6scripts/getOwner.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-getOwner
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/getOwner.js",
  contract: "SATURN",
  method: "getOwner",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-getOwner",
});
