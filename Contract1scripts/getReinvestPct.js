#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getReinvestPct — read (free, no wallet)
 * getReinvestPct(): number
 *
 * Percentage of each swap fee that stays in the pool's reserves, growing its
 * depth. saturnswap does not read this value: the reinvest part is whatever is
 * left of the fee after the provider, admin and holder slices, so when nobody
 * stakes the input token the holder slice is added to it (70% instead of 60%
 * on mainnet today).
 *
 * Returns number: Percentage out of 100 (default: 60).
 *
 * Usage: node Contract1scripts/getReinvestPct.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getReinvestPct
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getReinvestPct.js",
  contract: "saturnadmin",
  method: "getReinvestPct",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getReinvestPct",
});
