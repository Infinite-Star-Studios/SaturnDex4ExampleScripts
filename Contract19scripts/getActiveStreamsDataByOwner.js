#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getActiveStreamsDataByOwner — read (free, no wallet)
 * getActiveStreamsDataByOwner(owner: address): string*
 *
 * Same pipe-delimited batch format as getActiveStreamsData() but filtered to a
 * single owner. Use this on a wallet portfolio page to load all of a user's
 * live streams in one call.
 *
 * Returns string*: Sequence of pipe-delimited active stream rows for the given
 * owner.
 *
 * Usage: node Contract19scripts/getActiveStreamsDataByOwner.js <owner>
 *   owner (address): Address to filter active streams by.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getActiveStreamsDataByOwner
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getActiveStreamsDataByOwner.js",
  contract: "saturntwamm",
  method: "getActiveStreamsDataByOwner",
  params: [
    { name: "owner", type: "address", desc: "Address to filter active streams by." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getActiveStreamsDataByOwner",
});
