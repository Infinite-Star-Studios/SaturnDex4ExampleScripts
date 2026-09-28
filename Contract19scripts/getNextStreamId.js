#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getNextStreamId — read (free, no wallet)
 * getNextStreamId(): number
 *
 * Returns the ID that will be assigned to the next stream. Stream IDs are
 * sequential starting from 1.
 *
 * Returns number: Next available stream ID.
 *
 * Usage: node Contract19scripts/getNextStreamId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getNextStreamId
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getNextStreamId.js",
  contract: "saturntwamm",
  method: "getNextStreamId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getNextStreamId",
});
