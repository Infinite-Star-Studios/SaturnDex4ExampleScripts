#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getAvailableTreasury — read (free, no wallet)
 * getAvailableTreasury(): number
 *
 * The TAZ balance less what is owed to pledgers: what can still pay new
 * rewards. A reward larger than this is cut down to it.
 *
 * Returns number: Raw TAZ.
 *
 * Usage: node Lending8scripts/getAvailableTreasury.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getAvailableTreasury
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getAvailableTreasury.js",
  contract: "saturntaz",
  method: "getAvailableTreasury",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getAvailableTreasury",
});
