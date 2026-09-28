#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamAmountInTotal — read (free, no wallet)
 * getStreamAmountInTotal(streamId: number): number
 *
 * Returns the total input amount placed when the stream was created.
 *
 * Returns number: Original total raw amountIn.
 *
 * Usage: node Contract19scripts/getStreamAmountInTotal.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamAmountInTotal
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamAmountInTotal.js",
  contract: "saturntwamm",
  method: "getStreamAmountInTotal",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamAmountInTotal",
});
