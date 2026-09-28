#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getSOULfeeLoan — read (free, no wallet)
 * getSOULfeeLoan(): number
 *
 * Always returns 0. The SOUL loan fee was removed in v4-04x; lending
 * entrypoints no longer charge SOUL. The storage key is retained at zero for
 * ABI compatibility with older integrations. Do not use this value for any
 * pricing calculation.
 *
 * Returns number: Always 0.
 *
 * Usage: node Lending1scripts/getSOULfeeLoan.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getSOULfeeLoan
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getSOULfeeLoan.js",
  contract: "saturnlendcfg",
  method: "getSOULfeeLoan",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getSOULfeeLoan",
});
