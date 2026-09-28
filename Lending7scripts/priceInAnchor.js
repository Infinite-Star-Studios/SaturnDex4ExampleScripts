#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.priceInAnchor — read (free, no wallet)
 * priceInAnchor(tokenSymbol: string, scaledAmount: number, dexVersion: number): number
 *
 * Returns the scaled anchor-token (RA) equivalent of a given scaled amount of
 * tokenSymbol, using the reserves of the RA-paired pool on the specified DEX
 * version — on v4, the deepest active pool of the pair (largest reserve
 * product). TAZ is always priced at the reference pool (getReferencePool). The
 * lending protocol uses it for the loan's RA value at creation; collateral is
 * valued with v4PoolValueInBase instead. Pass scaled amounts (use scaleUp
 * first). Returns the anchor amount in 8-decimal scaled units.
 *
 * Returns number: Scaled RA-equivalent value.
 *
 * Usage: node Lending7scripts/priceInAnchor.js <tokenSymbol> <scaledAmount> <dexVersion>
 *   tokenSymbol (string): Token to price in anchor units.
 *   scaledAmount (number): Amount of the token in 8-decimal scaled units.
 *   dexVersion (number): 1 for v3/SATRN, 2 for v4/saturnpools.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-priceInAnchor
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/priceInAnchor.js",
  contract: "saturndexadapt",
  method: "priceInAnchor",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token to price in anchor units." },
    { name: "scaledAmount", type: "number", desc: "Amount of the token in 8-decimal scaled units." },
    { name: "dexVersion", type: "number", desc: "1 for v3/SATRN, 2 for v4/saturnpools." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-priceInAnchor",
});
