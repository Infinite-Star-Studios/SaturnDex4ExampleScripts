#!/usr/bin/env node
"use strict";

/**
 * SATURN.getName — read (free, no wallet)
 * getName(): string
 *
 * Token name property of the SATURN certificate contract.
 *
 * Returns string: "Saturn Pool NFT".
 *
 * Usage: node Contract6scripts/getName.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-getName
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/getName.js",
  contract: "SATURN",
  method: "getName",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-getName",
});
