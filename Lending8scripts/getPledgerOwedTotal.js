#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getPledgerOwedTotal — read (free, no wallet)
 * getPledgerOwedTotal(): number
 *
 * TAZ credited to pledgers and not yet claimed (tracked since 1.2.2).
 *
 * Returns number: Raw TAZ.
 *
 * Usage: node Lending8scripts/getPledgerOwedTotal.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getPledgerOwedTotal
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getPledgerOwedTotal.js",
  contract: "saturntaz",
  method: "getPledgerOwedTotal",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getPledgerOwedTotal",
});
