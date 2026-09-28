#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getLenderPledgerAt — read (free, no wallet)
 * getLenderPledgerAt(lender: address, index: number): address
 *
 * Returns the pledger address at a specific 1-indexed slot in a lender's
 * pledger list. Freed slots return null/zero address. Use in combination with
 * getLenderPledgerCount to enumerate the full pledger set.
 *
 * Returns address: Pledger address at this slot, or null address if the slot
 * was freed.
 *
 * Usage: node Lending8scripts/getLenderPledgerAt.js <lender> <index>
 *   lender (address): Lender address.
 *   index (number): 1-indexed slot number (1 to getLenderPledgerCount).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getLenderPledgerAt
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getLenderPledgerAt.js",
  contract: "saturntaz",
  method: "getLenderPledgerAt",
  params: [
    { name: "lender", type: "address", desc: "Lender address." },
    { name: "index", type: "number", desc: "1-indexed slot number (1 to getLenderPledgerCount)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getLenderPledgerAt",
});
