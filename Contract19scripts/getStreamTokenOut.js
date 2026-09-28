#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamTokenOut — read (free, no wallet)
 * getStreamTokenOut(streamId: number): string
 *
 * Returns the symbol of the output token being accumulated.
 *
 * Returns string: Output token symbol.
 *
 * Usage: node Contract19scripts/getStreamTokenOut.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamTokenOut
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamTokenOut.js",
  contract: "saturntwamm",
  method: "getStreamTokenOut",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamTokenOut",
});
