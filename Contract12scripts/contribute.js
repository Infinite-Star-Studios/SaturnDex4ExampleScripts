#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.contribute — write (signed transaction, needs PHANTASMA_WIF)
 * contribute(from: address, syndicateId: number, amountA: number, amountB: number)
 *
 * Investor deposits both tokens into an open syndicate. Each contribution may
 * not exceed the remaining distance to its target; repeated contributions from
 * the same address are aggregated.
 *
 * Usage: node Contract12scripts/contribute.js <syndicateId> <amountA> <amountB>
 *   syndicateId (number): A syndicate in status 0 (funding).
 *   amountA (number): Raw tokenA to deposit. Must be > 0 and <= remaining
 *   targetA.
 *   amountB (number): Raw tokenB to deposit. Must be > 0 and <= remaining
 *   targetB.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-contribute
 */

const { send } = require("../common");

send({
  file: "Contract12scripts/contribute.js",
  contract: "saturnsyndicate",
  method: "contribute",
  params: [
    { name: "from", type: "address", desc: "Contributor. Must be a witness." },
    { name: "syndicateId", type: "number", desc: "A syndicate in status 0 (funding)." },
    { name: "amountA", type: "number", desc: "Raw tokenA to deposit. Must be > 0 and <= remaining targetA." },
    { name: "amountB", type: "number", desc: "Raw tokenB to deposit. Must be > 0 and <= remaining targetB." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-contribute",
});
