#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamTokenIn — read (free, no wallet)
 * getStreamTokenIn(streamId: number): string
 *
 * Returns the symbol of the input token being streamed.
 *
 * Returns string: Input token symbol.
 *
 * Usage: node Contract19scripts/getStreamTokenIn.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamTokenIn
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamTokenIn.js",
  contract: "saturntwamm",
  method: "getStreamTokenIn",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamTokenIn",
});
