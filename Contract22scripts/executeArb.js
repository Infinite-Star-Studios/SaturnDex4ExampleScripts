#!/usr/bin/env node
"use strict";

/**
 * saturnstakearb.executeArb — write (signed transaction, needs PHANTASMA_WIF)
 * executeArb(from: address, tokenSymbol: string, amountIn: number, riskToken: string, poolBuy: number, poolSell: number): number
 *
 * Runs one stake arbitrage in a single atomic transaction: (1)
 * saturnholders.flashLendStake sends amountIn of tokenSymbol from the stake
 * vault to this contract; (2) leg 1 swaps it tokenSymbol → riskToken on
 * poolBuy and (3) leg 2 swaps all of that riskToken → tokenSymbol on poolSell,
 * both through saturnswap.swapFromContract with minAmountOut 1 (no per-leg
 * slippage limit; the only floor is step 4); (4) requires back > amountIn,
 * else "No arbitrage profit"; (5) with profit = back − amountIn, sends
 * amountIn back to saturnholders, holderShare = profit − floor(profit / 2) to
 * saturnliquidity and botShare = floor(profit / 2) to from; (6)
 * saturnholders.settleArbLoan requires saturnholders to hold at least
 * getTotalStaked(tokenSymbol) again and credits holderShare to every staker of
 * tokenSymbol pro-rata (claimed with saturnholders.claim, like swap fees).
 * Each leg pays its pool's normal swap fee before the profit check. There is
 * no minProfit parameter: simulate both legs off-chain and send only when
 * botShare covers your gas.
 *
 * Returns number: holderShare: the stakers' part of the profit, (back −
 * amountIn) − floor((back − amountIn) / 2), in raw tokenSymbol. Your own share
 * is floor((back − amountIn) / 2), i.e. holderShare or holderShare − 1, and is
 * in the StakeArbExecuted event (tokenSymbol, amountIn, backAmount, botShare,
 * holderShare).
 *
 * Usage: node Contract22scripts/executeArb.js <tokenSymbol> <amountIn> <riskToken> <poolBuy> <poolSell>
 *   tokenSymbol (string): Symbol of the token to borrow and denominate
 *   profit in; must be staked in saturnholders.
 *   amountIn (number): Raw amount of tokenSymbol to borrow. Must be > 0, ≤
 *   saturnholders.getTotalStaked(tokenSymbol) and ≥
 *   saturnrouter.getMinRawForSwap(tokenSymbol); the riskToken received on
 *   leg 1 must also clear getMinRawForSwap(riskToken).
 *   riskToken (string): Intermediate token for the round-trip. Must differ
 *   from tokenSymbol and appear in both poolBuy and poolSell.
 *   poolBuy (number): Pool ID for leg 1 (tokenSymbol → riskToken). Must be
 *   active and contain both tokenSymbol and riskToken.
 *   poolSell (number): Pool ID for leg 2 (riskToken → tokenSymbol). Must be
 *   active and contain both riskToken and tokenSymbol. Must differ from
 *   poolBuy.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnstakearb-executeArb
 */

const { send } = require("../common");

send({
  file: "Contract22scripts/executeArb.js",
  contract: "saturnstakearb",
  method: "executeArb",
  params: [
    { name: "from", type: "address", desc: "Bot address. Must sign (witness) and needs only KCAL for gas, no tokenSymbol. Receives botShare = floor((back − amountIn) / 2) in tokenSymbol." },
    { name: "tokenSymbol", type: "string", desc: "Symbol of the token to borrow and denominate profit in; must be staked in saturnholders." },
    { name: "amountIn", type: "number", desc: "Raw amount of tokenSymbol to borrow. Must be > 0, ≤ saturnholders.getTotalStaked(tokenSymbol) and ≥ saturnrouter.getMinRawForSwap(tokenSymbol); the riskToken..." },
    { name: "riskToken", type: "string", desc: "Intermediate token for the round-trip. Must differ from tokenSymbol and appear in both poolBuy and poolSell." },
    { name: "poolBuy", type: "number", desc: "Pool ID for leg 1 (tokenSymbol → riskToken). Must be active and contain both tokenSymbol and riskToken." },
    { name: "poolSell", type: "number", desc: "Pool ID for leg 2 (riskToken → tokenSymbol). Must be active and contain both riskToken and tokenSymbol. Must differ from poolBuy." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnstakearb-executeArb",
});
