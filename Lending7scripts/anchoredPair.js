#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.anchoredPair — read (free, no wallet)
 * anchoredPair(tokenA: string, tokenB: string): number
 *
 * Returns 1 only when the pair is the anchor token (RA) and TAZ, in either
 * order, and 0 for every other pair, other RA pairs included. Since 1.1.0 this
 * is the only pair the market and the vault accept as collateral.
 *
 * Returns number: 1 for RA/TAZ in either order, 0 otherwise.
 *
 * Usage: node Lending7scripts/anchoredPair.js <tokenA> <tokenB>
 *   tokenA (string): First token symbol.
 *   tokenB (string): Second token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-anchoredPair
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/anchoredPair.js",
  contract: "saturndexadapt",
  method: "anchoredPair",
  params: [
    { name: "tokenA", type: "string", desc: "First token symbol." },
    { name: "tokenB", type: "string", desc: "Second token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-anchoredPair",
});
