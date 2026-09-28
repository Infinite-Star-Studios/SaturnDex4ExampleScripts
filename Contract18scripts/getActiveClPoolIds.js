#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getActiveClPoolIds — read (free, no wallet)
 * getActiveClPoolIds(): number*
 *
 * Streams the IDs of all currently active (non-removed) CL pools. More
 * efficient for UI discovery than getAllClPoolIds() when removed pools should
 * be hidden.
 *
 * Returns number*: Sequence of active CL pool IDs.
 *
 * Usage: node Contract18scripts/getActiveClPoolIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getActiveClPoolIds
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getActiveClPoolIds.js",
  contract: "saturnclpools",
  method: "getActiveClPoolIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getActiveClPoolIds",
});
