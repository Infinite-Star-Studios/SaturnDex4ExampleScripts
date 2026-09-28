#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamPoolId — read (free, no wallet)
 * getStreamPoolId(streamId: number): number
 *
 * Returns the target pool ID that chunks are swapped through.
 *
 * Returns number: Target pool ID.
 *
 * Usage: node Contract19scripts/getStreamPoolId.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamPoolId
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamPoolId.js",
  contract: "saturntwamm",
  method: "getStreamPoolId",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamPoolId",
});
