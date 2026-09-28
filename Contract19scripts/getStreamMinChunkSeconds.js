#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamMinChunkSeconds — read (free, no wallet)
 * getStreamMinChunkSeconds(streamId: number): number
 *
 * Returns the minimum pacing interval (in seconds) between consecutive chunk
 * executions for this stream.
 *
 * Returns number: Minimum seconds between chunks.
 *
 * Usage: node Contract19scripts/getStreamMinChunkSeconds.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamMinChunkSeconds
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamMinChunkSeconds.js",
  contract: "saturntwamm",
  method: "getStreamMinChunkSeconds",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamMinChunkSeconds",
});
