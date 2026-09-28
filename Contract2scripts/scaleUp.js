#!/usr/bin/env node
"use strict";

/**
 * saturnpools.scaleUp — read (free, no wallet)
 * scaleUp(amount: number, symbol: string): number
 *
 * Converts a raw (on-chain decimal) amount into the protocol's internal scaled
 * units, using the stored scale factor for that token. Use this before passing
 * amounts to any method that expects scaled units.
 *
 * Returns number: Scaled amount: amount × getScaleFactor / getScaleDivisor,
 * rounded down (a divisor of 0 counts as 1).
 *
 * Usage: node Contract2scripts/scaleUp.js <amount> <symbol>
 *   amount (number): Raw token amount.
 *   symbol (string): Token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-scaleUp
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/scaleUp.js",
  contract: "saturnpools",
  method: "scaleUp",
  params: [
    { name: "amount", type: "number", desc: "Raw token amount." },
    { name: "symbol", type: "string", desc: "Token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-scaleUp",
});
