#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getTotalPrincipalLent — read (free, no wallet)
 * getTotalPrincipalLent(): number
 *
 * Returns the cumulative principal ever lent across all loans, in scaled
 * units. Useful for protocol TVL displays and risk dashboards.
 *
 * Returns number: Cumulative principal lent in scaled units.
 *
 * Usage: node Lending4scripts/getTotalPrincipalLent.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getTotalPrincipalLent
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getTotalPrincipalLent.js",
  contract: "saturnloans",
  method: "getTotalPrincipalLent",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getTotalPrincipalLent",
});
