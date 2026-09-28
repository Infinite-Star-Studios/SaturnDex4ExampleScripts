#!/usr/bin/env node
"use strict";

/**
 * SATURN.isTransferable — read (free, no wallet)
 * isTransferable(): bool
 *
 * true: certificates can be sent with the standard Phantasma NFT transfer.
 * Since saturnnft-4.1.5 a transfer also moves the pool's provider role to the
 * receiver, and it reverts while the pool carries a bond, rental, fee option
 * or reward campaign (see the contract description).
 *
 * Returns bool: true.
 *
 * Usage: node Contract6scripts/isTransferable.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-isTransferable
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/isTransferable.js",
  contract: "SATURN",
  method: "isTransferable",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-isTransferable",
});
