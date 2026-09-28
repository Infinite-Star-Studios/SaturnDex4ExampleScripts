#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getSOULfeeCreatePool — read (free, no wallet)
 * getSOULfeeCreatePool(): number
 *
 * Always returns 0. The SOUL storage fee that createPool() used to charge was
 * removed; the method is kept so older integrations keep working. Do not
 * budget SOUL for pool creation because of this value — the one notable extra
 * cost of createPool() is the gas burned to mint the SATURN certificate NFT
 * (about 2,500 KCAL).
 *
 * Returns number: Always 0.
 *
 * Usage: node Contract1scripts/getSOULfeeCreatePool.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getSOULfeeCreatePool
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getSOULfeeCreatePool.js",
  contract: "saturnadmin",
  method: "getSOULfeeCreatePool",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getSOULfeeCreatePool",
});
