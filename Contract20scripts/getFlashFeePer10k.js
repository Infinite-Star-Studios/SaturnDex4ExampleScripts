#!/usr/bin/env node
"use strict";

/**
 * saturnflash.getFlashFeePer10k — read (free, no wallet)
 * getFlashFeePer10k(): number
 *
 * Returns the current flash fee rate in basis points out of 10,000 (e.g. 5 =
 * 0.05%). The fee is amountIn × rate / 10000, taken out of the round trip's
 * gross profit and paid to the protocol admin wallet; the admin can set the
 * rate between 1 and 100.
 *
 * Returns number: Flash fee rate per 10,000 (range: 1–100; default: 5).
 *
 * Usage: node Contract20scripts/getFlashFeePer10k.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-getFlashFeePer10k
 */

const { read } = require("../common");

read({
  file: "Contract20scripts/getFlashFeePer10k.js",
  contract: "saturnflash",
  method: "getFlashFeePer10k",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnflash-getFlashFeePer10k",
});
