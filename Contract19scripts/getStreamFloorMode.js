#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamFloorMode — read (free, no wallet)
 * getStreamFloorMode(streamId: number): number
 *
 * How the stream's floor works. 1 = minOutputPerChunk is a price (streams
 * placed on 4.2.4): a chunk of chunkIn raw must pay at least minOutputPerChunk
 * × chunkIn × durationSeconds / (amountInTotal × minChunkSeconds), at least 1.
 * 0 = a fixed minOutputPerChunk per chunk (streams placed before the 4.2.4
 * upgrade). A keeper needs it to compute the floor a chunk must clear;
 * durationSeconds = getStreamEndTime − getStreamStartTime.
 *
 * Returns number: 1 = price floor, 0 = fixed floor.
 *
 * Usage: node Contract19scripts/getStreamFloorMode.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamFloorMode
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamFloorMode.js",
  contract: "saturntwamm",
  method: "getStreamFloorMode",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamFloorMode",
});
