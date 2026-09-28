#!/usr/bin/env node
"use strict";

/**
 * SATURN.isFungible — read (free, no wallet)
 * isFungible(): bool
 *
 * false: every certificate is a unique NFT tied to one pool.
 *
 * Returns bool: false.
 *
 * Usage: node Contract6scripts/isFungible.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-isFungible
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/isFungible.js",
  contract: "SATURN",
  method: "isFungible",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-isFungible",
});
