#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.getReferenceSpotPrice — read (free, no wallet)
 * getReferenceSpotPrice(): number
 *
 * The reference pool's spot TAZ per RA, scaled by 10^18 (getTwapScale), to
 * compare with a time-weighted average.
 *
 * Returns number: TAZ per RA × 10^18.
 *
 * Usage: node Lending7scripts/getReferenceSpotPrice.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-getReferenceSpotPrice
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/getReferenceSpotPrice.js",
  contract: "saturndexadapt",
  method: "getReferenceSpotPrice",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-getReferenceSpotPrice",
});
