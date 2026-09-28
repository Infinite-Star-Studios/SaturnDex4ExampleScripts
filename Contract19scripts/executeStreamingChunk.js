#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.executeStreamingChunk — write (signed transaction, needs PHANTASMA_WIF)
 * executeStreamingChunk(from: address, streamId: number)
 *
 * Executes the next chunk of an active stream. Permissionless: any signer can
 * call it once minChunkSeconds have passed since the last chunk (the first
 * chunk is due minChunkSeconds after placement), and the caller earns the
 * bounty. The chunk is everything owed since the last one, floor(amountInTotal
 * × (now − startTime) / durationSeconds) − streamedSoFar, and from endTime on
 * the whole remainder. If what would be left afterwards is below the swap
 * minimum (saturnrouter.getMinRawForSwap(tokenIn)), it is swept into this
 * chunk, so no stream ends with stuck dust. The chunk goes from escrow to
 * saturnliquidity and through saturnswap.swapFromContract on the stream's pool
 * with the chunk's floor as minAmountOut (floorMode 1: minOutputPerChunk ×
 * chunkIn × durationSeconds / (amountInTotal × minChunkSeconds), at least 1;
 * floorMode 0, streams placed before 4.2.4: minOutputPerChunk). The executor
 * receives bountyPer10k / 10,000 of the chunk's output in tokenOut, paid
 * immediately; the rest accumulates for the owner. The chunk that empties the
 * stream sets status 1 (completed), removes it from the active list and pays
 * the owner all accumulated output in the same transaction (emits
 * StreamClaimed).
 *
 * Usage: node Contract19scripts/executeStreamingChunk.js <streamId>
 *   streamId (number): ID of the stream to advance.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-executeStreamingChunk
 */

const { send } = require("../common");

send({
  file: "Contract19scripts/executeStreamingChunk.js",
  contract: "saturntwamm",
  method: "executeStreamingChunk",
  params: [
    { name: "from", type: "address", desc: "Executor address; receives the bounty from this chunk. Does not need to be the stream owner." },
    { name: "streamId", type: "number", desc: "ID of the stream to advance." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturntwamm-executeStreamingChunk",
});
