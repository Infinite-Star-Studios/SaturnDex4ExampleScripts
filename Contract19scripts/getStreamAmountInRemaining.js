#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamAmountInRemaining — read (free, no wallet)
 * getStreamAmountInRemaining(streamId: number): number
 *
 * Returns how much of the input has not yet been streamed. Use this to compute
 * percentage completion.
 *
 * Returns number: Raw input amount still in escrow, not yet swapped.
 *
 * Usage: node Contract19scripts/getStreamAmountInRemaining.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamAmountInRemaining
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamAmountInRemaining.js",
  contract: "saturntwamm",
  method: "getStreamAmountInRemaining",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamAmountInRemaining",
});
