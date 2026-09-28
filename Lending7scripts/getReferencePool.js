#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.getReferencePool — read (free, no wallet)
 * getReferencePool(): number
 *
 * The RA/TAZ v4 pool every TAZ price and collateral value reads: the pool the
 * admin pinned, while it still qualifies (active, both reserves non-zero,
 * liquidity burned or time-locked through saturnlplock). 0 while none
 * qualifies; then TAZ has no price and requests, loans and LTV checks refuse.
 * Mainnet: pool 33.
 *
 * Returns number: Pool ID, or 0.
 *
 * Usage: node Lending7scripts/getReferencePool.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-getReferencePool
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/getReferencePool.js",
  contract: "saturndexadapt",
  method: "getReferencePool",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-getReferencePool",
});
