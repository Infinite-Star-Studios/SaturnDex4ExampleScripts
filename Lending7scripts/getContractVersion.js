#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag. Mainnet and devnet report
 * "saturndexadapt-1.3.0".
 *
 * Returns string: Build tag.
 *
 * Usage: node Lending7scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/getContractVersion.js",
  contract: "saturndexadapt",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-getContractVersion",
});
