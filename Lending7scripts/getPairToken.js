#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.getPairToken — read (free, no wallet)
 * getPairToken(): string
 *
 * The only token a collateral pool may pair with the anchor: "TAZ".
 *
 * Returns string: "TAZ".
 *
 * Usage: node Lending7scripts/getPairToken.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-getPairToken
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/getPairToken.js",
  contract: "saturndexadapt",
  method: "getPairToken",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-getPairToken",
});
