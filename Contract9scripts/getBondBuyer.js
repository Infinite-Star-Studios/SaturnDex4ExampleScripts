#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondBuyer — read (free, no wallet)
 * getBondBuyer(bondId: number): address
 *
 * Current holder of the bond. Null for listings that have not been purchased
 * yet. Changes when a resale is accepted (acceptBondSale()); transferBond() is
 * deprecated and always reverts.
 *
 * Returns address: Holder address (null if unsold).
 *
 * Usage: node Contract9scripts/getBondBuyer.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondBuyer
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondBuyer.js",
  contract: "saturnbonds",
  method: "getBondBuyer",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondBuyer",
});
