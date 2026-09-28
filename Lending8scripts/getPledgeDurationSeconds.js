#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getPledgeDurationSeconds — read (free, no wallet)
 * getPledgeDurationSeconds(): number
 *
 * Returns the fixed pledge window length in seconds: 2,592,000 (30 days) on
 * mainnet, 300 on devnet for testing. A pledge cannot be withdrawn until this
 * many seconds have elapsed since it was created.
 *
 * Returns number: Pledge lock duration in seconds.
 *
 * Usage: node Lending8scripts/getPledgeDurationSeconds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getPledgeDurationSeconds
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getPledgeDurationSeconds.js",
  contract: "saturntaz",
  method: "getPledgeDurationSeconds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getPledgeDurationSeconds",
});
