#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamMinOutputPerChunk — read (free, no wallet)
 * getStreamMinOutputPerChunk(streamId: number): number
 *
 * Returns minOutputPerChunk as placed: the minimum raw tokenOut for one
 * on-time chunk. For floorMode 1 streams (placed on 4.2.4) it is a price,
 * scaled to each chunk's size; for floorMode 0 streams it is a fixed amount
 * per chunk. Placement requires it to be > 0.
 *
 * Returns number: Raw tokenOut floor for one on-time chunk.
 *
 * Usage: node Contract19scripts/getStreamMinOutputPerChunk.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamMinOutputPerChunk
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamMinOutputPerChunk.js",
  contract: "saturntwamm",
  method: "getStreamMinOutputPerChunk",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamMinOutputPerChunk",
});
