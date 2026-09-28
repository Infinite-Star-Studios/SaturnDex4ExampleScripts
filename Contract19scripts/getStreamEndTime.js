#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamEndTime — read (free, no wallet)
 * getStreamEndTime(streamId: number): number
 *
 * Returns the Unix timestamp at which the stream's duration ends (startTime +
 * durationSeconds; there is no separate duration getter). From then on the
 * next chunk is the whole remainder, still subject to pacing, the swap minimum
 * and the floor.
 *
 * Returns number: Unix end timestamp (startTime + durationSeconds).
 *
 * Usage: node Contract19scripts/getStreamEndTime.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamEndTime
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamEndTime.js",
  contract: "saturntwamm",
  method: "getStreamEndTime",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamEndTime",
});
