#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getListedBondIds — read (free, no wallet)
 * getListedBondIds(): number*
 *
 * Yields the ids of bonds in status 0 (listed, waiting for a buyer) — the open
 * marketplace.
 *
 * Returns number*: Stream of bond ids.
 *
 * Usage: node Contract9scripts/getListedBondIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getListedBondIds
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getListedBondIds.js",
  contract: "saturnbonds",
  method: "getListedBondIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getListedBondIds",
});
