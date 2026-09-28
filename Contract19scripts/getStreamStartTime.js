#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamStartTime — read (free, no wallet)
 * getStreamStartTime(streamId: number): number
 *
 * Returns the Unix timestamp when the stream was placed.
 *
 * Returns number: Unix start timestamp.
 *
 * Usage: node Contract19scripts/getStreamStartTime.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamStartTime
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamStartTime.js",
  contract: "saturntwamm",
  method: "getStreamStartTime",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamStartTime",
});
