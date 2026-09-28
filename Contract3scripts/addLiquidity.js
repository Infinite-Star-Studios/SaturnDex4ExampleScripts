#!/usr/bin/env node
"use strict";

/**
 * saturnliquidity.addLiquidity — write (signed transaction, needs PHANTASMA_WIF)
 * addLiquidity(from: address, poolId: number, amountTokenA: number, maxAmountTokenB: number)
 *
 * Adds proportional liquidity to an existing pool. You specify exactly how
 * much of token A you want to add; the contract calculates the matching amount
 * of token B based on the current reserve ratio and deposits both.
 * maxAmountTokenB is your slippage cap — the call reverts if the required B
 * amount exceeds it. Token A is the pool's tokenA (saturnpools.getPoolTokenA),
 * not whichever token you pick. Only the pool provider can add liquidity;
 * since saturnpools 4.1.10 the provider follows the SATURN certificate. A
 * burned or time-locked pool (saturnlplock) still accepts liquidity, and the
 * added tokens fall under the same terms: on a burned pool they can never be
 * withdrawn, and on a time-locked pool not before the lock ends.
 *
 * Returns void: Success = amountTokenA and the required token B moved into
 * custody and the pool's reserves increased. Emits LiquidityAdded(poolId,
 * amountTokenA, token B taken) in raw units.
 *
 * Usage: node Contract3scripts/addLiquidity.js <poolId> <amountTokenA> <maxAmountTokenB>
 *   poolId (number): The pool to deposit into.
 *   amountTokenA (number): Raw amount of the pool's tokenA to add; at least
 *   saturnrouter.getMinRawForAddLiquidity(tokenA), 1 whole token today
 *   (100,000,000 raw SOUL).
 *   maxAmountTokenB (number): Maximum raw amount of token B you're willing
 *   to add.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnliquidity-addLiquidity
 */

const { send } = require("../common");

send({
  file: "Contract3scripts/addLiquidity.js",
  contract: "saturnliquidity",
  method: "addLiquidity",
  params: [
    { name: "from", type: "address", desc: "Pool provider wallet (must be witness)." },
    { name: "poolId", type: "number", desc: "The pool to deposit into." },
    { name: "amountTokenA", type: "number", desc: "Raw amount of the pool's tokenA to add; at least saturnrouter.getMinRawForAddLiquidity(tokenA), 1 whole token today (100,000,000 raw SOUL)." },
    { name: "maxAmountTokenB", type: "number", desc: "Maximum raw amount of token B you're willing to add." },
  ],
  walletIndex: 0,
  heavy: true, // mints an LP-NFT series: up to 3,000 KCAL of gas
  docs: "https://devops.saturnx.cc/reference#saturnliquidity-addLiquidity",
});
