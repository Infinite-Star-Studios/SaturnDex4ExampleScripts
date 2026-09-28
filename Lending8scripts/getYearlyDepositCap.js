#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getYearlyDepositCap — read (free, no wallet)
 * getYearlyDepositCap(): number
 *
 * Returns the maximum raw TAZ that all authorized depositors may collectively
 * deposit in a single 365-day window. Default is 40,000 TAZ (40,000 × 10^9
 * raw).
 *
 * Returns number: Yearly TAZ deposit cap in raw 9-decimal units.
 *
 * Usage: node Lending8scripts/getYearlyDepositCap.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getYearlyDepositCap
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getYearlyDepositCap.js",
  contract: "saturntaz",
  method: "getYearlyDepositCap",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getYearlyDepositCap",
});
