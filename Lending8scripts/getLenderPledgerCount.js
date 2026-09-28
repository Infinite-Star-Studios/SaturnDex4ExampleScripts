#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getLenderPledgerCount — read (free, no wallet)
 * getLenderPledgerCount(lender: address): number
 *
 * Returns the current pledger list high-water mark for a lender (the highest
 * slot index ever used; it never goes down, and a freed slot reads as the null
 * address). Use alongside getLenderPledgerAt to enumerate all pledgers.
 *
 * Returns number: High-water index; iterate 1..N to enumerate pledger slots.
 *
 * Usage: node Lending8scripts/getLenderPledgerCount.js <lender>
 *   lender (address): Lender address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getLenderPledgerCount
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getLenderPledgerCount.js",
  contract: "saturntaz",
  method: "getLenderPledgerCount",
  params: [
    { name: "lender", type: "address", desc: "Lender address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getLenderPledgerCount",
});
