#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.commit — write (signed transaction, needs PHANTASMA_WIF)
 * commit(from: address, launchpadId: number, amountQuote: number)
 *
 * Commits quote tokens to a live launchpad, reserving the equivalent tokenA
 * allocation at the fixed price. `amountQuote` must be a multiple of
 * `quotePerA` so the allocation is exact. Multiple calls from the same address
 * accumulate; the buyer's total commitment determines their pool share weight
 * if the launch activates. Buyers cannot commit after `endTime` even if the
 * launchpad status is still 0.
 *
 * Usage: node Contract17scripts/commit.js <launchpadId> <amountQuote>
 *   launchpadId (number): ID of the launchpad to commit to.
 *   amountQuote (number): Raw units of tokenQuote to commit. Must be >=
 *   minCommitQuote and a multiple of quotePerA. Must not push soldA beyond
 *   tokensForSale.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-commit
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/commit.js",
  contract: "saturnlaunchpad",
  method: "commit",
  params: [
    { name: "from", type: "address", desc: "Buyer's address; must be the transaction witness. Cannot be the launchpad creator." },
    { name: "launchpadId", type: "number", desc: "ID of the launchpad to commit to." },
    { name: "amountQuote", type: "number", desc: "Raw units of tokenQuote to commit. Must be >= minCommitQuote and a multiple of quotePerA. Must not push soldA beyond tokensForSale." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-commit",
});
