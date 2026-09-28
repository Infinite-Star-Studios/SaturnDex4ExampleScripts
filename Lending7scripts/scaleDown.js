#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.scaleDown — read (free, no wallet)
 * scaleDown(scaledAmount: number, tokenSymbol: string): number
 *
 * Converts a scaled (8-decimal) amount back to the token's native raw
 * decimals. Use to convert a pricing result into a value you can display to
 * users or pass to a transfer call.
 *
 * Returns number: Equivalent amount in the token's native decimals.
 *
 * Usage: node Lending7scripts/scaleDown.js <scaledAmount> <tokenSymbol>
 *   scaledAmount (number): Amount in 8-decimal scaled units.
 *   tokenSymbol (string): Token symbol to determine the scale factor.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-scaleDown
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/scaleDown.js",
  contract: "saturndexadapt",
  method: "scaleDown",
  params: [
    { name: "scaledAmount", type: "number", desc: "Amount in 8-decimal scaled units." },
    { name: "tokenSymbol", type: "string", desc: "Token symbol to determine the scale factor." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-scaleDown",
});
