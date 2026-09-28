#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamOwner — read (free, no wallet)
 * getStreamOwner(streamId: number): address
 *
 * Returns the address of the wallet that placed the streaming order.
 *
 * Returns address: Stream owner address.
 *
 * Usage: node Contract19scripts/getStreamOwner.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamOwner
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamOwner.js",
  contract: "saturntwamm",
  method: "getStreamOwner",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamOwner",
});
