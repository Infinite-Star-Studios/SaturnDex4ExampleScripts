#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondMode — read (free, no wallet)
 * getBondMode(bondId: number): number
 *
 * Returns 1 for PARTIAL (no collateral) or 2 for HYBRID (collateral-backed).
 *
 * Returns number: 1 = partial, 2 = hybrid.
 *
 * Usage: node Contract9scripts/getBondMode.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondMode
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondMode.js",
  contract: "saturnbonds",
  method: "getBondMode",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondMode",
});
