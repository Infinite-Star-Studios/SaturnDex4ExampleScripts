#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondFaceValue — read (free, no wallet)
 * getBondFaceValue(bondId: number): number
 *
 * Maximum raw payout the buyer can receive at maturity.
 *
 * Returns number: Face value in feeToken raw units.
 *
 * Usage: node Contract9scripts/getBondFaceValue.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondFaceValue
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondFaceValue.js",
  contract: "saturnbonds",
  method: "getBondFaceValue",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondFaceValue",
});
