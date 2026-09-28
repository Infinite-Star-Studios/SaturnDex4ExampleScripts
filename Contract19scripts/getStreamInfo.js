#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamInfo — read (free, no wallet)
 * getStreamInfo(streamId: number): string
 *
 * Returns all key stream fields as a single underscore-delimited string for a
 * one-round-trip refresh. Format:
 * "pool:N_in:TOKEN_out:TOKEN_total:N_streamed:N_remaining:N_accOut:N_start:N_end:N_status:N".
 * All amounts in raw units; times are Unix timestamps.
 *
 * Returns string: Packed field string. Parse by splitting on "_" then on ":".
 *
 * Usage: node Contract19scripts/getStreamInfo.js <streamId>
 *   streamId (number): Stream ID to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamInfo
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamInfo.js",
  contract: "saturntwamm",
  method: "getStreamInfo",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamInfo",
});
