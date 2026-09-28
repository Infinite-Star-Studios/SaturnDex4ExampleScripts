#!/usr/bin/env node
"use strict";

/**
 * saturnholders.stake — write (signed transaction, needs PHANTASMA_WIF)
 * stake(from: address, tokenSymbol: string, amount: number)
 *
 * Deposits amount raw units of tokenSymbol into the rewards vault on behalf of
 * from. If the user already has an open position, any pending rewards are
 * settled first so they aren't lost. The user's bookmark is set to the current
 * accumulator value, ensuring they only earn from future accruals. Tokens are
 * transferred from the caller's wallet into this contract's custody and cannot
 * be traded while staked — this custody model prevents the wash-claim attack
 * that pure hold-to-earn is vulnerable to.
 *
 * Usage: node Contract21scripts/stake.js <tokenSymbol> <amount>
 *   tokenSymbol (string): Symbol of the token to stake. It only has to exist
 *   on Phantasma (saturnpools.validateTokenSymbol checks Token.exists); it
 *   earns swap fees from Saturn v4 swaps that sell it and profit from stake
 *   arbitrage in its pools.
 *   amount (number): Raw-unit amount to deposit. Must be > 0.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-stake
 */

const { send } = require("../common");

send({
  file: "Contract21scripts/stake.js",
  contract: "saturnholders",
  method: "stake",
  params: [
    { name: "from", type: "address", desc: "Staker's address. Must be the transaction witness." },
    { name: "tokenSymbol", type: "string", desc: "Symbol of the token to stake. It only has to exist on Phantasma (saturnpools.validateTokenSymbol checks Token.exists); it earns swap fees from Saturn v4 swap..." },
    { name: "amount", type: "number", desc: "Raw-unit amount to deposit. Must be > 0." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnholders-stake",
});
