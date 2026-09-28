#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.buyOption — write (signed transaction, needs PHANTASMA_WIF)
 * buyOption(from: address, optionId: number)
 *
 * Buyer pays the premium to the writer and activates the option. The duration
 * window starts now, the pool's live fee is recorded as getOptionOriginalFee()
 * (the fee restored when the option ends), and the pool gets a financial lock.
 * The live pool is checked again first, since listings do not lock it.
 *
 * Usage: node Contract11scripts/buyOption.js <optionId>
 *   optionId (number): A listing in status 0 (listed).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-buyOption
 */

const { send } = require("../common");

send({
  file: "Contract11scripts/buyOption.js",
  contract: "saturnfeeopts",
  method: "buyOption",
  params: [
    { name: "from", type: "address", desc: "Buyer — cannot be the option writer." },
    { name: "optionId", type: "number", desc: "A listing in status 0 (listed)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-buyOption",
});
