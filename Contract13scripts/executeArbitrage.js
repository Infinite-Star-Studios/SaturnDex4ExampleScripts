#!/usr/bin/env node
"use strict";

/**
 * saturnarb.executeArbitrage — write (signed transaction, needs PHANTASMA_WIF)
 * executeArbitrage(from: address, poolIdBuy: number, poolIdSell: number, tokenStart: string, amountIn: number, minProfit: number)
 *
 * Atomic two-hop arbitrage. Swaps amountIn of tokenStart into the intermediate
 * token on poolIdBuy (where the intermediate token is cheapest in tokenStart),
 * then swaps the intermediate back to tokenStart on poolIdSell (where it is
 * dearest). The intermediate token is inferred from poolIdBuy — whichever side
 * isn't tokenStart. Both pools must contain the exact same pair. On success
 * the whole finalAmount (your capital plus the entire profit) is returned to
 * you; the protocol takes nothing beyond the normal swap fees inside each
 * pool.
 *
 * Usage: node Contract13scripts/executeArbitrage.js <poolIdBuy> <poolIdSell> <tokenStart> <amountIn> <minProfit>
 *   poolIdBuy (number): Pool where the intermediate token is cheap:
 *   tokenStart buys the most of it here (the highest
 *   saturnrouter.getPoolPrice(poolId, tokenStart)). The first hop swaps
 *   tokenStart into the intermediate token here.
 *   poolIdSell (number): Pool where the intermediate token is dear:
 *   tokenStart buys the least of it here (the lowest getPoolPrice(poolId,
 *   tokenStart)). The second hop swaps the intermediate back to tokenStart
 *   here. Must share the same pair as poolIdBuy and must be different from
 *   it.
 *   tokenStart (string): Token you provide and receive back. Must be one of
 *   the two tokens in both pools.
 *   amountIn (number): Raw amount of tokenStart to commit to the arb. Must
 *   be > 0, <= your wallet balance, and large enough that each leg clears
 *   saturnrouter.getMinRawForSwap() for its input token.
 *   minProfit (number): Minimum acceptable profit (finalAmount − amountIn)
 *   in raw tokenStart units, checked as profit >= minProfit; the transaction
 *   reverts with 'Profit below minimum' if not met. Gas is paid in KCAL, so
 *   convert your gas cost into tokenStart if minProfit should cover it.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnarb-executeArbitrage
 */

const { send } = require("../common");

send({
  file: "Contract13scripts/executeArbitrage.js",
  contract: "saturnarb",
  method: "executeArbitrage",
  params: [
    { name: "from", type: "address", desc: "Executor address — must be a witness and must hold amountIn of tokenStart." },
    { name: "poolIdBuy", type: "number", desc: "Pool where the intermediate token is cheap: tokenStart buys the most of it here (the highest saturnrouter.getPoolPrice(poolId, tokenStart)). The first hop sw..." },
    { name: "poolIdSell", type: "number", desc: "Pool where the intermediate token is dear: tokenStart buys the least of it here (the lowest getPoolPrice(poolId, tokenStart)). The second hop swaps the inter..." },
    { name: "tokenStart", type: "string", desc: "Token you provide and receive back. Must be one of the two tokens in both pools." },
    { name: "amountIn", type: "number", desc: "Raw amount of tokenStart to commit to the arb. Must be > 0, <= your wallet balance, and large enough that each leg clears saturnrouter.getMinRawForSwap() for..." },
    { name: "minProfit", type: "number", desc: "Minimum acceptable profit (finalAmount − amountIn) in raw tokenStart units, checked as profit >= minProfit; the transaction reverts with 'Profit below minimu..." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnarb-executeArbitrage",
});
