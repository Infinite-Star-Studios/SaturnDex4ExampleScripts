#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondCollateral — read (free, no wallet)
 * getBondCollateral(bondId: number): number
 *
 * Raw collateral amount posted by the issuer (always 0 in partial mode).
 *
 * Returns number: Collateral amount in feeToken raw units.
 *
 * Usage: node Contract9scripts/getBondCollateral.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondCollateral
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondCollateral.js",
  contract: "saturnbonds",
  method: "getBondCollateral",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondCollateral",
});
