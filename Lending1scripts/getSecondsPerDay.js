#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getSecondsPerDay — read (free, no wallet)
 * getSecondsPerDay(): number
 *
 * Returns 86,400 — the constant used by the credit score time-bonus accrual.
 * Use when computing daily time-bonus increments client-side.
 *
 * Returns number: Seconds per day constant (86400).
 *
 * Usage: node Lending1scripts/getSecondsPerDay.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getSecondsPerDay
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getSecondsPerDay.js",
  contract: "saturnlendcfg",
  method: "getSecondsPerDay",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getSecondsPerDay",
});
