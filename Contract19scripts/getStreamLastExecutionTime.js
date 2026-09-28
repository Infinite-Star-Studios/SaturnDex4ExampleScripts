#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamLastExecutionTime — read (free, no wallet)
 * getStreamLastExecutionTime(streamId: number): number
 *
 * Returns the Unix timestamp of the most recent chunk execution (the placement
 * time until the first chunk). Add getStreamMinChunkSeconds() to determine
 * when the next chunk becomes executable.
 *
 * Returns number: Unix timestamp of last executeStreamingChunk call.
 *
 * Usage: node Contract19scripts/getStreamLastExecutionTime.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamLastExecutionTime
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamLastExecutionTime.js",
  contract: "saturntwamm",
  method: "getStreamLastExecutionTime",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamLastExecutionTime",
});
