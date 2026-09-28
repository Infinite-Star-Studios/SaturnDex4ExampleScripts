#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.getReferenceCumulative — read (free, no wallet)
 * getReferenceCumulative(): number
 *
 * The reference pool's accumulated TAZ-per-RA price (price × 10^18 × seconds,
 * from saturnpools' TWAP accumulators). Two readings give the average over the
 * time between them; saturnloans stores one with every liquidation flag.
 *
 * Returns number: Cumulative price.
 *
 * Usage: node Lending7scripts/getReferenceCumulative.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-getReferenceCumulative
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/getReferenceCumulative.js",
  contract: "saturndexadapt",
  method: "getReferenceCumulative",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-getReferenceCumulative",
});
