#!/usr/bin/env node
"use strict";

/**
 * saturnswap.swap — write (signed transaction, needs PHANTASMA_WIF)
 * swap(from: address, poolId: number, amountIn: number, tokenIn: string, tokenOut: string, minAmountOut: number): number
 *
 * Executes a swap against a specific pool. The caller sends amountIn of
 * tokenIn; the output is the constant-product amount for amountIn minus the
 * whole pool fee, computed in 8-decimal scaled units with integer division,
 * and tokenOut is sent to the caller. The fee is then split: provider 10%
 * (claimable in saturnfees), admin 20% (sent to the admin wallet), holders 10%
 * (only when tokenIn has stakers in saturnholders) and the rest added to the
 * pool's reserve (saturnadmin.getFeeSplitRatios). Set minAmountOut to protect
 * against slippage (pass 0 to disable the check). Always query SaturnRouter
 * first to find the best pool for a pair — passing a sub-optimal poolId here
 * won't revert but will give you a worse rate.
 *
 * Returns number: Raw amount of tokenOut actually received by the caller.
 *
 * Usage: node Contract4scripts/swap.js <poolId> <amountIn> <tokenIn> <tokenOut> <minAmountOut>
 *   poolId (number): The pool to swap against.
 *   amountIn (number): Raw amount of tokenIn to send.
 *   tokenIn (string): Symbol of the token being sold.
 *   tokenOut (string): Symbol of the token being bought.
 *   minAmountOut (number): Minimum acceptable raw amount of tokenOut. 0 = no
 *   slippage check.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnswap-swap
 */

const { send } = require("../common");

send({
  file: "Contract4scripts/swap.js",
  contract: "saturnswap",
  method: "swap",
  params: [
    { name: "from", type: "address", desc: "Swapper wallet (must be witness)." },
    { name: "poolId", type: "number", desc: "The pool to swap against." },
    { name: "amountIn", type: "number", desc: "Raw amount of tokenIn to send." },
    { name: "tokenIn", type: "string", desc: "Symbol of the token being sold." },
    { name: "tokenOut", type: "string", desc: "Symbol of the token being bought." },
    { name: "minAmountOut", type: "number", desc: "Minimum acceptable raw amount of tokenOut. 0 = no slippage check." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnswap-swap",
});
