#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.scaleUp — read (free, no wallet)
 * scaleUp(rawAmount: number, tokenSymbol: string): number
 *
 * Converts a raw token amount (native decimals) to the protocol's internal
 * 8-decimal scaled representation. All pricing views expect scaled inputs;
 * call scaleUp on any user-supplied raw amount before passing it to
 * priceInAnchor or priceInToken.
 *
 * Returns number: Equivalent amount scaled to 8 decimal places.
 *
 * Usage: node Lending7scripts/scaleUp.js <rawAmount> <tokenSymbol>
 *   rawAmount (number): Amount in the token's native on-chain decimals.
 *   tokenSymbol (string): Token symbol to determine the scale factor.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-scaleUp
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/scaleUp.js",
  contract: "saturndexadapt",
  method: "scaleUp",
  params: [
    { name: "rawAmount", type: "number", desc: "Amount in the token's native on-chain decimals." },
    { name: "tokenSymbol", type: "string", desc: "Token symbol to determine the scale factor." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-scaleUp",
});
