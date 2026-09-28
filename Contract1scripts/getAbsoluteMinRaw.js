#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getAbsoluteMinRaw — read (free, no wallet)
 * getAbsoluteMinRaw(): number
 *
 * The absolute floor for any computed raw-unit minimum. Even if scaling math
 * would give a smaller number, raw minimums never drop below this value.
 *
 * Returns number: Absolute minimum raw units (default: 100).
 *
 * Usage: node Contract1scripts/getAbsoluteMinRaw.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getAbsoluteMinRaw
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getAbsoluteMinRaw.js",
  contract: "saturnadmin",
  method: "getAbsoluteMinRaw",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getAbsoluteMinRaw",
});
