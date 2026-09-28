#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.addClLiquidity — write (signed transaction, needs PHANTASMA_WIF)
 * addClLiquidity(from: address, poolId: number, amountA: number, maxAmountB: number)
 *
 * Adds liquidity to an existing active CL pool at the current ratio. The
 * amount of tokenB actually deposited is calculated from the pool's current
 * reserves and the supplied amountA; if that computed amount exceeds
 * maxAmountB the call reverts, giving the caller a slippage guard. Only the
 * pool provider (the original creator) can add liquidity. Both token amounts
 * are transferred from the caller to the liquidity vault. Since 4.2.6 only the
 * tokenA the 8-decimal scaled reserve can represent is taken; for a token with
 * more than 8 decimals the sub-unit remainder stays in your wallet.
 *
 * Usage: node Contract18scripts/addClLiquidity.js <poolId> <amountA> <maxAmountB>
 *   poolId (number): ID of the CL pool to supply.
 *   amountA (number): Raw amount of tokenA to add.
 *   maxAmountB (number): Maximum raw amount of tokenB the caller is willing
 *   to deposit (slippage cap).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-addClLiquidity
 */

const { send } = require("../common");

send({
  file: "Contract18scripts/addClLiquidity.js",
  contract: "saturnclpools",
  method: "addClLiquidity",
  params: [
    { name: "from", type: "address", desc: "Pool provider; must be the original pool creator and transaction signer." },
    { name: "poolId", type: "number", desc: "ID of the CL pool to supply." },
    { name: "amountA", type: "number", desc: "Raw amount of tokenA to add." },
    { name: "maxAmountB", type: "number", desc: "Maximum raw amount of tokenB the caller is willing to deposit (slippage cap)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnclpools-addClLiquidity",
});
