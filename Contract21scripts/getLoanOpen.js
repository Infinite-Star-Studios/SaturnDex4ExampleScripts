#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getLoanOpen — read (free, no wallet)
 * getLoanOpen(tokenSymbol: string): number
 *
 * Returns 1 while a saturnstakearb flash-borrow of tokenSymbol's staked
 * capital is in progress within a transaction, 0 otherwise. Under normal
 * conditions this will always return 0 from an external query because the
 * borrow opens and closes within a single atomic transaction. Useful for
 * debugging or monitoring.
 *
 * Returns number: 1 = flash loan open (within an active executeArb tx); 0 = no
 * open loan.
 *
 * Usage: node Contract21scripts/getLoanOpen.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol to check.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getLoanOpen
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getLoanOpen.js",
  contract: "saturnholders",
  method: "getLoanOpen",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol to check." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getLoanOpen",
});
