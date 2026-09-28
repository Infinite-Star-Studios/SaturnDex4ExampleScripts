#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getOriginationFeeBps — read (free, no wallet)
 * getOriginationFeeBps(): number
 *
 * Origination fee in basis points (per 10,000) charged on the loan principal
 * at creation. Default is 100 (1%). Use getOriginationFee() for the actual
 * computed amount.
 *
 * Returns number: Origination fee rate in bps/10000 (default: 100 = 1%).
 *
 * Usage: node Lending1scripts/getOriginationFeeBps.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getOriginationFeeBps
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getOriginationFeeBps.js",
  contract: "saturnlendcfg",
  method: "getOriginationFeeBps",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getOriginationFeeBps",
});
