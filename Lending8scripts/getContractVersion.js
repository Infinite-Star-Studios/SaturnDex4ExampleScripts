#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag. Mainnet and devnet report "saturntaz-1.2.3".
 *
 * Returns string: Build tag, e.g. "saturntaz-1.2.3".
 *
 * Usage: node Lending8scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getContractVersion.js",
  contract: "saturntaz",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getContractVersion",
});
