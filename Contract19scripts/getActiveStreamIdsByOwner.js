#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getActiveStreamIdsByOwner — read (free, no wallet)
 * getActiveStreamIdsByOwner(owner: address): number*
 *
 * Returns only the active stream IDs that belong to a specific owner address.
 * Useful for a personal dashboard showing all of a user's live streams.
 *
 * Returns number*: Sequence of active stream IDs owned by the given address.
 *
 * Usage: node Contract19scripts/getActiveStreamIdsByOwner.js <owner>
 *   owner (address): Address whose active streams to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getActiveStreamIdsByOwner
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getActiveStreamIdsByOwner.js",
  contract: "saturntwamm",
  method: "getActiveStreamIdsByOwner",
  params: [
    { name: "owner", type: "address", desc: "Address whose active streams to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getActiveStreamIdsByOwner",
});
