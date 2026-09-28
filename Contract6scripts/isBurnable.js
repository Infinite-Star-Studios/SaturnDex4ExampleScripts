#!/usr/bin/env node
"use strict";

/**
 * SATURN.isBurnable — read (free, no wallet)
 * isBurnable(): bool
 *
 * true: a holder can burn a certificate directly, except the certificate of a
 * burned pool (saturnlplock), whose burn reverts with "This certificate is the
 * fee key of a burned pool and cannot be destroyed". Burning a live pool's
 * certificate does not remove the pool: its provider keeps it, and removePool
 * still works through the provider.
 *
 * Returns bool: true.
 *
 * Usage: node Contract6scripts/isBurnable.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-isBurnable
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/isBurnable.js",
  contract: "SATURN",
  method: "isBurnable",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-isBurnable",
});
