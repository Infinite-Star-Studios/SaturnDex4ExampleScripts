#!/usr/bin/env node
"use strict";

/**
 * saturnflash.executeFlashArb — write (signed transaction, needs PHANTASMA_WIF)
 * executeFlashArb(from: address, poolIdBuy: number, poolIdSell: number, tokenStart: string, amountIn: number, minNetProfit: number): number
 *
 * Core flash-arbitrage entrypoint. Borrows amountIn of tokenStart from
 * saturnliquidity, executes leg 1 (tokenStart → tokenMid via poolIdBuy) and
 * leg 2 (tokenMid → tokenStart via poolIdSell), returns amountIn to
 * saturnliquidity, pays flashFee = amountIn × flashFeePer10k / 10000 to the
 * protocol admin wallet (saturnadmin.getAdmin()) and transfers netProfit =
 * finalAmount − amountIn − flashFee to from. The executor puts up no capital:
 * the transaction reverts atomically if finalAmount ≤ amountIn, if the gross
 * profit does not exceed the flash fee, or if netProfit < minNetProfit, so a
 * failed attempt costs only gas. tokenMid is the other token of poolIdBuy;
 * poolIdSell must be a different active pool holding the same two tokens (in
 * either order). Both legs are ordinary saturnswap contract swaps, so each
 * pays its pool's full swap fee (currently provider 10%, admin 20%, holders
 * 10% when the input token has stakers, the rest reinvested into that pool)
 * before the profit check. Only saturnpools (v4) pools can be used, not
 * saturnclpools ranges or v3 SATRN pools.
 *
 * Returns number: Net profit in raw units of tokenStart delivered to the
 * executor.
 *
 * Usage: node Contract20scripts/executeFlashArb.js <poolIdBuy> <poolIdSell> <tokenStart> <amountIn> <minNetProfit>
 *   poolIdBuy (number): ID of the pool used for leg 1 (tokenStart →
 *   tokenMid). tokenMid is inferred as the other token in this pool.
 *   poolIdSell (number): ID of the pool used for leg 2 (tokenMid →
 *   tokenStart). Must contain both tokenStart and the resolved tokenMid.
 *   tokenStart (string): Token symbol to borrow and to denominate profit in.
 *   Must be present in both pools.
 *   amountIn (number): Raw amount of tokenStart to borrow. Must be > 0, at
 *   most getMaxBorrowable(tokenStart), big enough that the flash fee is at
 *   least 1 raw unit (2,000 raw at the default 5 per 10,000) and that each
 *   leg clears saturnrouter.getMinRawForSwap() for its input token (0.01
 *   token today).
 *   minNetProfit (number): Minimum acceptable net profit in raw units of
 *   tokenStart after deducting the flash fee. Checked as netProfit >=
 *   minNetProfit; 0 accepts any profit of at least 1 raw unit. Gas is paid
 *   separately in KCAL, so convert your gas cost into tokenStart if
 *   minNetProfit should cover it.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-executeFlashArb
 */

const { send } = require("../common");

send({
  file: "Contract20scripts/executeFlashArb.js",
  contract: "saturnflash",
  method: "executeFlashArb",
  params: [
    { name: "from", type: "address", desc: "Executor's address; must be the transaction witness and is the recipient of net profit." },
    { name: "poolIdBuy", type: "number", desc: "ID of the pool used for leg 1 (tokenStart → tokenMid). tokenMid is inferred as the other token in this pool." },
    { name: "poolIdSell", type: "number", desc: "ID of the pool used for leg 2 (tokenMid → tokenStart). Must contain both tokenStart and the resolved tokenMid." },
    { name: "tokenStart", type: "string", desc: "Token symbol to borrow and to denominate profit in. Must be present in both pools." },
    { name: "amountIn", type: "number", desc: "Raw amount of tokenStart to borrow. Must be > 0, at most getMaxBorrowable(tokenStart), big enough that the flash fee is at least 1 raw unit (2,000 raw at the..." },
    { name: "minNetProfit", type: "number", desc: "Minimum acceptable net profit in raw units of tokenStart after deducting the flash fee. Checked as netProfit >= minNetProfit; 0 accepts any profit of at leas..." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnflash-executeFlashArb",
});
