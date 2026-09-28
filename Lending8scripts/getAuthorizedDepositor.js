#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getAuthorizedDepositor — read (free, no wallet)
 * getAuthorizedDepositor(wallet: address): number
 *
 * Returns 1 if the wallet is authorized to deposit TAZ into the treasury, 0 if
 * not. Use to check allowlist status before attempting a depositTaz call.
 *
 * Returns number: 1 if authorized, 0 if not.
 *
 * Usage: node Lending8scripts/getAuthorizedDepositor.js <wallet>
 *   wallet (address): Address to check.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getAuthorizedDepositor
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getAuthorizedDepositor.js",
  contract: "saturntaz",
  method: "getAuthorizedDepositor",
  params: [
    { name: "wallet", type: "address", desc: "Address to check." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getAuthorizedDepositor",
});
