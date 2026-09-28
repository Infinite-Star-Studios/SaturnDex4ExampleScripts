#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getTazBalance — read (free, no wallet)
 * getTazBalance(): number
 *
 * Returns the TAZ balance held by this contract. Part of it may already be
 * owed to pledgers (getPledgerOwedTotal); what can still pay new rewards is
 * getAvailableTreasury().
 *
 * Returns number: Raw TAZ balance (9-decimal) held in the contract.
 *
 * Usage: node Lending8scripts/getTazBalance.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getTazBalance
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getTazBalance.js",
  contract: "saturntaz",
  method: "getTazBalance",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getTazBalance",
});
