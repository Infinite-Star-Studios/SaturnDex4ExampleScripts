#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamAmountStreamedSoFar — read (free, no wallet)
 * getStreamAmountStreamedSoFar(streamId: number): number
 *
 * Returns the cumulative raw input amount that has been swapped across all
 * executed chunks.
 *
 * Returns number: Cumulative swapped input amount (raw units).
 *
 * Usage: node Contract19scripts/getStreamAmountStreamedSoFar.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamAmountStreamedSoFar
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamAmountStreamedSoFar.js",
  contract: "saturntwamm",
  method: "getStreamAmountStreamedSoFar",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamAmountStreamedSoFar",
});
