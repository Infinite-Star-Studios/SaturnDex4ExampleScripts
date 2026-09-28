#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getNftPoolId — read (free, no wallet)
 * getNftPoolId(nftId: number): number
 *
 * Reverse of getPoolNftId: the pool a SATURN certificate id belongs to. 0 when
 * unknown (certificates minted before the reverse map existed are filled in by
 * claimPoolProvider or a burn).
 *
 * Returns number: Pool ID, or 0.
 *
 * Usage: node Contract2scripts/getNftPoolId.js <nftId>
 *   nftId (number): SATURN certificate token id.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getNftPoolId
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getNftPoolId.js",
  contract: "saturnpools",
  method: "getNftPoolId",
  params: [
    { name: "nftId", type: "number", desc: "SATURN certificate token id." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getNftPoolId",
});
