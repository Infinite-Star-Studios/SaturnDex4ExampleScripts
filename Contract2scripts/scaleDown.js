#!/usr/bin/env node
"use strict";

/**
 * saturnpools.scaleDown — read (free, no wallet)
 * scaleDown(amount: number, symbol: string): number
 *
 * Inverse of scaleUp — converts a scaled internal amount back into raw token
 * units for display. Use this when reading reserves, payouts, or any number
 * returned by a protocol view.
 *
 * Returns number: Raw token amount: amount × getScaleDivisor / getScaleFactor,
 * rounded down.
 *
 * Usage: node Contract2scripts/scaleDown.js <amount> <symbol>
 *   amount (number): Scaled amount.
 *   symbol (string): Token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-scaleDown
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/scaleDown.js",
  contract: "saturnpools",
  method: "scaleDown",
  params: [
    { name: "amount", type: "number", desc: "Scaled amount." },
    { name: "symbol", type: "string", desc: "Token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-scaleDown",
});
