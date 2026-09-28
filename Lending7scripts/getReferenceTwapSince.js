#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.getReferenceTwapSince — read (free, no wallet)
 * getReferenceTwapSince(): number
 *
 * When saturnpools last started tracking the reference, or last found one of
 * its sides empty (unix seconds); 0 when there is no reference or it is not
 * tracked. A reading taken before this time cannot be averaged with one after
 * it.
 *
 * Returns number: Unix seconds, or 0.
 *
 * Usage: node Lending7scripts/getReferenceTwapSince.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-getReferenceTwapSince
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/getReferenceTwapSince.js",
  contract: "saturndexadapt",
  method: "getReferenceTwapSince",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-getReferenceTwapSince",
});
