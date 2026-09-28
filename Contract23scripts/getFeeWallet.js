#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getFeeWallet — read (free, no wallet)
 * getFeeWallet(): address
 *
 * The address that receives lock and burn fees. They are sent straight there;
 * this contract holds no TAZ.
 *
 * Returns address: Fee wallet. Live on mainnet and devnet:
 * P2KBPHBKq1xuoSajuKxQCd7RfCfGFyoczoHQdVxacEUc9As (also the saturnadmin owner
 * today).
 *
 * Usage: node Contract23scripts/getFeeWallet.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getFeeWallet
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getFeeWallet.js",
  contract: "saturnlplock",
  method: "getFeeWallet",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getFeeWallet",
});
