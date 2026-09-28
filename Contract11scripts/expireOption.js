#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.expireOption — write (signed transaction, needs PHANTASMA_WIF)
 * expireOption(from: address, optionId: number)
 *
 * Anyone can trigger expiry after the option's endTime has passed. Typically
 * called by the writer to reclaim full fee control and unlock the pool.
 *
 * Usage: node Contract11scripts/expireOption.js <optionId>
 *   optionId (number): An active option whose endTime has already passed.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-expireOption
 */

const { send } = require("../common");

send({
  file: "Contract11scripts/expireOption.js",
  contract: "saturnfeeopts",
  method: "expireOption",
  params: [
    { name: "from", type: "address", desc: "Any witness — usually the writer." },
    { name: "optionId", type: "number", desc: "An active option whose endTime has already passed." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-expireOption",
});
