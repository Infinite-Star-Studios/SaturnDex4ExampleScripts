#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.hasAnchorPool — read (free, no wallet)
 * hasAnchorPool(tokenSymbol: string, dexVersion: number): number
 *
 * Returns 1 if a live RA-paired pool exists for the given token on the
 * specified DEX version (1 = v3/SATRN, 2 = v4/saturnpools), 0 if not. On v4
 * the adapter walks every pool registered for the token/RA pair and returns 1
 * if any of them is active with both reserves above 0 (pricing then uses the
 * deepest one). For TAZ it returns 1 only while the reference pool qualifies
 * (getReferencePool() > 0), whatever dexVersion is. A token whose value is 1
 * can be priced via priceInAnchor. It says nothing about collateral: only an
 * RA/TAZ pool can back a loan (anchoredPair).
 *
 * Returns number: 1 if an RA pool exists, 0 if the token is not priceable.
 *
 * Usage: node Lending7scripts/hasAnchorPool.js <tokenSymbol> <dexVersion>
 *   tokenSymbol (string): Token to check for an RA-paired pool.
 *   dexVersion (number): 1 for Saturn DEX v3, 2 for Saturn DEX v4.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-hasAnchorPool
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/hasAnchorPool.js",
  contract: "saturndexadapt",
  method: "hasAnchorPool",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token to check for an RA-paired pool." },
    { name: "dexVersion", type: "number", desc: "1 for Saturn DEX v3, 2 for Saturn DEX v4." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-hasAnchorPool",
});
