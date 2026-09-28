#!/usr/bin/env node
"use strict";

/**
 * SATURN.getTotalNftMinted — read (free, no wallet)
 * getTotalNftMinted(): number
 *
 * Certificates minted by createPool() minus those burned by removePool(). It
 * matches the number of active certificate-bearing pools (20 on mainnet today)
 * unless a pool was removed while its certificate was held elsewhere or had
 * already been burned by its holder; those removals are not subtracted.
 * Syndicate and launchpad pools have no certificate and are not counted.
 *
 * Returns number: Counter of certificates minted minus certificates burned by
 * removePool.
 *
 * Usage: node Contract6scripts/getTotalNftMinted.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-getTotalNftMinted
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/getTotalNftMinted.js",
  contract: "SATURN",
  method: "getTotalNftMinted",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-getTotalNftMinted",
});
