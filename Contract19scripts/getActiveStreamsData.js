#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getActiveStreamsData — read (free, no wallet)
 * getActiveStreamsData(): string*
 *
 * Batch view that streams one encoded row per active stream, eliminating N
 * round-trips for list UIs. A keeper still needs per-stream reads the rows do
 * not carry: getStreamStartTime, getStreamLastExecutionTime,
 * getStreamMinChunkSeconds, getStreamAmountStreamedSoFar,
 * getStreamMinOutputPerChunk, getStreamBountyPer10k and getStreamFloorMode
 * (several calls fit in one invokeRawScript). Each row is pipe-delimited:
 * "streamId|poolId|owner|tokenIn|tokenOut|amountInTotal|amountInRemaining|amountOutAccumulated|endTime|status".
 *
 * Returns string*: Sequence of pipe-delimited stream data rows. One row per
 * active stream.
 *
 * Usage: node Contract19scripts/getActiveStreamsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getActiveStreamsData
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getActiveStreamsData.js",
  contract: "saturntwamm",
  method: "getActiveStreamsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getActiveStreamsData",
});
