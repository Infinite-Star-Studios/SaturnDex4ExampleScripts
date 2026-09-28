#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getTotalDefaults — read (free, no wallet)
 * getTotalDefaults(): number
 *
 * Cumulative default count across all borrowers. Track this alongside
 * getTotalLoansIssued to compute the protocol-wide default rate.
 *
 * Returns number: Cumulative default events.
 *
 * Usage: node Lending2scripts/getTotalDefaults.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getTotalDefaults
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getTotalDefaults.js",
  contract: "saturncredit",
  method: "getTotalDefaults",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getTotalDefaults",
});
