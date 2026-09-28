#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.executeOrder — write (signed transaction, needs PHANTASMA_WIF)
 * executeOrder(from: address, orderId: number)
 *
 * Anyone executes an active, unexpired order and earns its bounty. The order
 * is marked executed and taken off the active list first; then the escrowed
 * tokenIn is sent to saturnliquidity and swapped through
 * saturnswap.swapFromContract on the order's pool with minAmountOut as the
 * slippage floor. If the pool pays less than minAmountOut, or more than a
 * non-zero maxAmountOut, the whole transaction reverts and only gas is spent.
 * The bounty comes from the surplus: bounty = (amountOut − minAmountOut) ×
 * bountyPer10k / 10000, paid in tokenOut to the executor; the owner receives
 * amountOut − bounty, never less than minAmountOut. An order filled exactly at
 * its limit pays no bounty. The owner may execute their own order.
 *
 * Usage: node Contract14scripts/executeOrder.js <orderId>
 *   orderId (number): An active order whose expiryTime has not passed.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-executeOrder
 */

const { send } = require("../common");

send({
  file: "Contract14scripts/executeOrder.js",
  contract: "saturnlimit",
  method: "executeOrder",
  params: [
    { name: "from", type: "address", desc: "Executor — any signer (witness). Does not need to own the order; receives the bounty." },
    { name: "orderId", type: "number", desc: "An active order whose expiryTime has not passed." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlimit-executeOrder",
});
