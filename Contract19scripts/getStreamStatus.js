#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamStatus — read (free, no wallet)
 * getStreamStatus(streamId: number): number
 *
 * Returns the lifecycle status of a stream: 0 = active, 1 = completed (fully
 * streamed), 2 = cancelled. An id never assigned (including 0) also reads 0,
 * so check 0 < streamId < getNextStreamId() or use the active-stream views.
 *
 * Returns number: 0 = active, 1 = completed, 2 = cancelled.
 *
 * Usage: node Contract19scripts/getStreamStatus.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamStatus
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamStatus.js",
  contract: "saturntwamm",
  method: "getStreamStatus",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamStatus",
});
