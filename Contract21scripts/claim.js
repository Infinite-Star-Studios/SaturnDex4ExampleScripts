#!/usr/bin/env node
"use strict";

/**
 * saturnholders.claim — write (signed transaction, needs PHANTASMA_WIF)
 * claim(from: address, tokenSymbol: string)
 *
 * Pays out all pending rewards for from's tokenSymbol stake without altering
 * the stake balance. Rewards (the swap-fee slice and the saturnstakearb profit
 * share, both in tokenSymbol) are transferred from saturnliquidity (the
 * central custodian) directly to from. The user's bookmark is bumped to the
 * current accumulator so subsequent calls report zero pending until new swaps
 * accrue more fees. Can be called at any time after stake().
 *
 * Usage: node Contract21scripts/claim.js <tokenSymbol>
 *   tokenSymbol (string): Symbol of the staked token whose rewards to claim.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-claim
 */

const { send } = require("../common");

send({
  file: "Contract21scripts/claim.js",
  contract: "saturnholders",
  method: "claim",
  params: [
    { name: "from", type: "address", desc: "Staker's address. Must be the transaction witness and must have an active stake." },
    { name: "tokenSymbol", type: "string", desc: "Symbol of the staked token whose rewards to claim." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnholders-claim",
});
