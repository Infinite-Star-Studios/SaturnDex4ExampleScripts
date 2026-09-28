#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getOnTimeRepayCap — read (free, no wallet)
 * getOnTimeRepayCap(): number
 *
 * Maximum credit score points that on-time repayments can contribute in total.
 * Default is 350.
 *
 * Returns number: Maximum on-time repayment bonus contribution (default: 350).
 *
 * Usage: node Lending1scripts/getOnTimeRepayCap.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getOnTimeRepayCap
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getOnTimeRepayCap.js",
  contract: "saturnlendcfg",
  method: "getOnTimeRepayCap",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getOnTimeRepayCap",
});
