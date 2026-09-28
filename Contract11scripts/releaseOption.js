#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.releaseOption — write (signed transaction, needs PHANTASMA_WIF)
 * releaseOption(from: address, optionId: number)
 *
 * Buyer voluntarily gives up fee control before expiry. Useful if the buyer is
 * done with the position and wants to unlock the pool so the writer can list
 * again.
 *
 * Usage: node Contract11scripts/releaseOption.js <optionId>
 *   optionId (number): An active option (status 1).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-releaseOption
 */

const { send } = require("../common");

send({
  file: "Contract11scripts/releaseOption.js",
  contract: "saturnfeeopts",
  method: "releaseOption",
  params: [
    { name: "from", type: "address", desc: "Must be the option buyer." },
    { name: "optionId", type: "number", desc: "An active option (status 1)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-releaseOption",
});
