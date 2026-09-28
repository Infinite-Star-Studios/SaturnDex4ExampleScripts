#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getAllActiveStreamIds — read (free, no wallet)
 * getAllActiveStreamIds(): number*
 *
 * Streams the IDs of all currently active (status = 0) streams. Pair with
 * getStreamInfo() or getActiveStreamsData() to build a live order-book view.
 *
 * Returns number*: Sequence of active stream IDs.
 *
 * Usage: node Contract19scripts/getAllActiveStreamIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getAllActiveStreamIds
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getAllActiveStreamIds.js",
  contract: "saturntwamm",
  method: "getAllActiveStreamIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getAllActiveStreamIds",
});
