#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.placeStreamingOrder — write (signed transaction, needs PHANTASMA_WIF)
 * placeStreamingOrder(from: address, poolId: number, amountIn: number, durationSeconds: number, tokenIn: string, tokenOut: string, minChunkSeconds: number, minOutputPerChunk: number, bountyPer10k: number)
 *
 * Opens a new streaming order. The full amountIn is transferred from the
 * caller into the TWAMM contract's escrow immediately. The stream runs for
 * durationSeconds, executing chunks no faster than one per minChunkSeconds.
 * Each chunk executor receives bountyPer10k basis-points of that chunk's
 * output as a bounty; set to 0 to disable executor incentives (only
 * recommended for self-operated bots). minOutputPerChunk is a mandatory price
 * floor (it must be greater than 0): the minimum raw output of one on-time
 * chunk (amountIn × minChunkSeconds / durationSeconds). Every chunk must pay
 * the same per unit of input, so a late chunk twice that size needs twice the
 * output and a smaller last chunk proportionally less: floor =
 * minOutputPerChunk × chunkIn × durationSeconds / (amountIn ×
 * minChunkSeconds), at least 1. Size it from the pool's quote for one on-time
 * chunk minus the slippage you accept. The floor applies to the chunk's output
 * before the executor's bounty is taken. Placement also refuses a stream whose
 * on-time chunk is below the swap minimum
 * (saturnrouter.getMinRawForSwap(tokenIn)).
 *
 * Usage: node Contract19scripts/placeStreamingOrder.js <poolId> <amountIn> <durationSeconds> <tokenIn> <tokenOut> <minChunkSeconds> <minOutputPerChunk> <bountyPer10k>
 *   poolId (number): ID of the target pool (regular Saturn pool) through
 *   which each chunk will be swapped.
 *   amountIn (number): Total raw amount of tokenIn to stream over the
 *   duration.
 *   durationSeconds (number): Total duration of the stream in seconds.
 *   Minimum 60, maximum 31,536,000 (1 year).
 *   tokenIn (string): Symbol of the input token; must be one side of the
 *   target pool's pair.
 *   tokenOut (string): Symbol of the desired output token; must be the other
 *   side of the pool's pair.
 *   minChunkSeconds (number): Minimum seconds that must elapse between chunk
 *   executions. At least 60; cannot exceed durationSeconds.
 *   minOutputPerChunk (number): Minimum raw tokenOut for one on-time chunk
 *   (the stream's price floor), scaled to each chunk's actual size; must be
 *   > 0.
 *   bountyPer10k (number): Basis-points share of each chunk's gross output
 *   paid to the executor (0–500, i.e. 0–5%).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-placeStreamingOrder
 */

const { send } = require("../common");

send({
  file: "Contract19scripts/placeStreamingOrder.js",
  contract: "saturntwamm",
  method: "placeStreamingOrder",
  params: [
    { name: "from", type: "address", desc: "Stream owner; deposits the input tokens and claims the output. Must be the transaction signer." },
    { name: "poolId", type: "number", desc: "ID of the target pool (regular Saturn pool) through which each chunk will be swapped." },
    { name: "amountIn", type: "number", desc: "Total raw amount of tokenIn to stream over the duration." },
    { name: "durationSeconds", type: "number", desc: "Total duration of the stream in seconds. Minimum 60, maximum 31,536,000 (1 year)." },
    { name: "tokenIn", type: "string", desc: "Symbol of the input token; must be one side of the target pool's pair." },
    { name: "tokenOut", type: "string", desc: "Symbol of the desired output token; must be the other side of the pool's pair." },
    { name: "minChunkSeconds", type: "number", desc: "Minimum seconds that must elapse between chunk executions. At least 60; cannot exceed durationSeconds." },
    { name: "minOutputPerChunk", type: "number", desc: "Minimum raw tokenOut for one on-time chunk (the stream's price floor), scaled to each chunk's actual size; must be > 0." },
    { name: "bountyPer10k", type: "number", desc: "Basis-points share of each chunk's gross output paid to the executor (0–500, i.e. 0–5%)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturntwamm-placeStreamingOrder",
});
