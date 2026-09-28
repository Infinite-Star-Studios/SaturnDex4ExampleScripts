#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.exerciseOption — write (signed transaction, needs PHANTASMA_WIF)
 * exerciseOption(from: address, optionId: number)
 *
 * Buyer snaps the pool's fee rate to the option's target. Can be called any
 * time before the option expires, even multiple times (each call just
 * re-applies the same rate).
 *
 * Usage: node Contract11scripts/exerciseOption.js <optionId>
 *   optionId (number): An active option (status 1) whose endTime is still in
 *   the future.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-exerciseOption
 */

const { send } = require("../common");

send({
  file: "Contract11scripts/exerciseOption.js",
  contract: "saturnfeeopts",
  method: "exerciseOption",
  params: [
    { name: "from", type: "address", desc: "Must be the option buyer." },
    { name: "optionId", type: "number", desc: "An active option (status 1) whose endTime is still in the future." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-exerciseOption",
});
