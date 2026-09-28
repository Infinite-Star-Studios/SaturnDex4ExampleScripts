#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getDefaultPenalty — read (free, no wallet)
 * getDefaultPenalty(): number
 *
 * Credit score points deducted when a loan defaults (grace period exhausted
 * without payment). Default is 150. Show this prominently on loan health
 * dashboards.
 *
 * Returns number: Score penalty for a loan default (default: 150).
 *
 * Usage: node Lending1scripts/getDefaultPenalty.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getDefaultPenalty
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getDefaultPenalty.js",
  contract: "saturnlendcfg",
  method: "getDefaultPenalty",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getDefaultPenalty",
});
