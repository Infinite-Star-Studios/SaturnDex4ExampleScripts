#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamAmountOutAccumulated — read (free, no wallet)
 * getStreamAmountOutAccumulated(streamId: number): number
 *
 * Returns the current unclaimed output balance sitting in the TWAMM contract
 * for this stream. Set to zero when claimStreamingOutput is called, and when
 * the completing chunk or cancelStream pays the owner.
 *
 * Returns number: Raw unclaimed tokenOut accumulated so far.
 *
 * Usage: node Contract19scripts/getStreamAmountOutAccumulated.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamAmountOutAccumulated
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamAmountOutAccumulated.js",
  contract: "saturntwamm",
  method: "getStreamAmountOutAccumulated",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamAmountOutAccumulated",
});
