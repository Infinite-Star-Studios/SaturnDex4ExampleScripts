#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.claimStreamingOutput — write (signed transaction, needs PHANTASMA_WIF)
 * claimStreamingOutput(from: address, streamId: number)
 *
 * Transfers all accumulated tokenOut from completed chunk swaps to the stream
 * owner. Can be called at any point during or after the stream — mid-stream
 * partial claims are fully supported. Resets the accumulator to zero after
 * payout. Since 4.2.4 the chunk that completes a stream pays the owner
 * automatically and cancelStream pays out the accumulated output, so claims
 * matter while a stream runs; a stream completed under 4.2.3 may still hold
 * output to claim.
 *
 * Usage: node Contract19scripts/claimStreamingOutput.js <streamId>
 *   streamId (number): ID of the stream from which to claim output.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-claimStreamingOutput
 */

const { send } = require("../common");

send({
  file: "Contract19scripts/claimStreamingOutput.js",
  contract: "saturntwamm",
  method: "claimStreamingOutput",
  params: [
    { name: "from", type: "address", desc: "Stream owner; must match the address that placed the order." },
    { name: "streamId", type: "number", desc: "ID of the stream from which to claim output." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturntwamm-claimStreamingOutput",
});
