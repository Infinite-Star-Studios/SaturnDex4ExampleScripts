#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getStreamBountyPer10k — read (free, no wallet)
 * getStreamBountyPer10k(streamId: number): number
 *
 * Returns the executor bounty rate in basis points out of 10,000. Multiply by
 * chunk output and divide by 10,000 to estimate what an executor earns per
 * call.
 *
 * Returns number: Bounty in basis points (0–500).
 *
 * Usage: node Contract19scripts/getStreamBountyPer10k.js <streamId>
 *   streamId (number): Stream ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getStreamBountyPer10k
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getStreamBountyPer10k.js",
  contract: "saturntwamm",
  method: "getStreamBountyPer10k",
  params: [
    { name: "streamId", type: "number", desc: "Stream ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getStreamBountyPer10k",
});
