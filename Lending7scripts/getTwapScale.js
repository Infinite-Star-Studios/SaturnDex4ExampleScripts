#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.getTwapScale — read (free, no wallet)
 * getTwapScale(): number
 *
 * The scale of every price here: 10^18 (the same as saturnpools.getTwapScale).
 *
 * Returns number: 1000000000000000000.
 *
 * Usage: node Lending7scripts/getTwapScale.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-getTwapScale
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/getTwapScale.js",
  contract: "saturndexadapt",
  method: "getTwapScale",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-getTwapScale",
});
