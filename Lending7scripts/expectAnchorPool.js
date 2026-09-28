#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.expectAnchorPool — read (free, no wallet)
 * expectAnchorPool(tokenSymbol: string, dexVersion: number)
 *
 * Reverts with a descriptive message if no RA-paired pool exists for the token
 * on the given DEX version. Use in scripts or simulation to gate-check a token
 * before building a transaction.
 *
 * Usage: node Lending7scripts/expectAnchorPool.js <tokenSymbol> <dexVersion>
 *   tokenSymbol (string): Token symbol to validate.
 *   dexVersion (number): 1 for v3, 2 for v4.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-expectAnchorPool
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/expectAnchorPool.js",
  contract: "saturndexadapt",
  method: "expectAnchorPool",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol to validate." },
    { name: "dexVersion", type: "number", desc: "1 for v3, 2 for v4." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-expectAnchorPool",
});
