#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.getPinnedReferencePool — read (free, no wallet)
 * getPinnedReferencePool(): number
 *
 * The pool id the admin pinned as reference, whether or not it still qualifies
 * (a time lock can run out).
 *
 * Returns number: Pool ID, or 0 if never pinned.
 *
 * Usage: node Lending7scripts/getPinnedReferencePool.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-getPinnedReferencePool
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/getPinnedReferencePool.js",
  contract: "saturndexadapt",
  method: "getPinnedReferencePool",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-getPinnedReferencePool",
});
