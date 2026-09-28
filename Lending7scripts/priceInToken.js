#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.priceInToken — read (free, no wallet)
 * priceInToken(fromToken: string, scaledAmount: number, fromDex: number, toToken: string, toDex: number): number
 *
 * Cross-token pricing: converts a scaled amount of fromToken (priced on
 * fromDex) into the equivalent scaled value denominated in toToken (priced on
 * toDex), routing through RA as an intermediate anchor. Use this for cross-DEX
 * or cross-token collateral comparisons (e.g., compare v3 LP collateral to a
 * v4 loan denomination).
 *
 * Returns number: Scaled equivalent in toToken units.
 *
 * Usage: node Lending7scripts/priceInToken.js <fromToken> <scaledAmount> <fromDex> <toToken> <toDex>
 *   fromToken (string): Source token symbol.
 *   scaledAmount (number): Amount of the source token in 8-decimal scaled
 *   units.
 *   fromDex (number): DEX version for the source token's RA pool (1 = v3, 2
 *   = v4).
 *   toToken (string): Destination token symbol.
 *   toDex (number): DEX version for the destination token's RA pool (1 = v3,
 *   2 = v4).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-priceInToken
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/priceInToken.js",
  contract: "saturndexadapt",
  method: "priceInToken",
  params: [
    { name: "fromToken", type: "string", desc: "Source token symbol." },
    { name: "scaledAmount", type: "number", desc: "Amount of the source token in 8-decimal scaled units." },
    { name: "fromDex", type: "number", desc: "DEX version for the source token's RA pool (1 = v3, 2 = v4)." },
    { name: "toToken", type: "string", desc: "Destination token symbol." },
    { name: "toDex", type: "number", desc: "DEX version for the destination token's RA pool (1 = v3, 2 = v4)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-priceInToken",
});
