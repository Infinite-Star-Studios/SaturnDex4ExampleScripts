#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondIssuer — read (free, no wallet)
 * getBondIssuer(bondId: number): address
 *
 * Address of the wallet that created the bond listing.
 *
 * Returns address: Issuer address.
 *
 * Usage: node Contract9scripts/getBondIssuer.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondIssuer
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondIssuer.js",
  contract: "saturnbonds",
  method: "getBondIssuer",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondIssuer",
});
