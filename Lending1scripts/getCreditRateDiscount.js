#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getCreditRateDiscount — read (free, no wallet)
 * getCreditRateDiscount(): number
 *
 * Per-unit discount applied per credit score point. The effective rate is:
 * baseInterestRate − (creditScore × creditRateDiscount / 1000), clamped to
 * [minInterestRate, maxInterestRate]. Default is 15.
 *
 * Returns number: Rate discount factor (default: 15; applied as discount =
 * creditScore * 15 / 1000).
 *
 * Usage: node Lending1scripts/getCreditRateDiscount.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getCreditRateDiscount
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getCreditRateDiscount.js",
  contract: "saturnlendcfg",
  method: "getCreditRateDiscount",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getCreditRateDiscount",
});
