#!/usr/bin/env node
"use strict";

/**
 * saturnflash.quoteFlashFee — read (free, no wallet)
 * quoteFlashFee(amount: number): number
 *
 * Returns the flash fee that would be charged on a given borrow amount at the
 * current flashFeePer10k rate. Use this before calling executeFlashArb to
 * calculate whether the expected arb spread exceeds the total cost (2× swap
 * fees + flash fee + gas).
 *
 * Returns number: Flash fee in raw token units: (amount × flashFeePer10k) /
 * 10000.
 *
 * Usage: node Contract20scripts/quoteFlashFee.js <amount>
 *   amount (number): The borrow amount in raw token units.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-quoteFlashFee
 */

const { read } = require("../common");

read({
  file: "Contract20scripts/quoteFlashFee.js",
  contract: "saturnflash",
  method: "quoteFlashFee",
  params: [
    { name: "amount", type: "number", desc: "The borrow amount in raw token units." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnflash-quoteFlashFee",
});
