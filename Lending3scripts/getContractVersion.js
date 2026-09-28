#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getContractVersion — read (free, no wallet)
 * getContractVersion(): string
 *
 * Returns the deployed build tag. Mainnet and devnet report
 * "saturnvault-1.1.0". 1.1.0 is the first vault with this method.
 * saturndexadapt.v4LockPool calls it before it pledges a pool, so an older
 * vault, which would leave the certificate with the borrower, cannot take a
 * pledge.
 *
 * Returns string: Build tag, e.g. "saturnvault-1.1.0".
 *
 * Usage: node Lending3scripts/getContractVersion.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getContractVersion
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getContractVersion.js",
  contract: "saturnvault",
  method: "getContractVersion",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getContractVersion",
});
