#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.createClPool — write (signed transaction, needs PHANTASMA_WIF)
 * createClPool(from: address, tokenA: string, tokenB: string, amountA: number, amountB: number, priceMin: number, priceMax: number, feePer10k: number)
 *
 * Creates a new concentrated liquidity pool seeded with the caller's initial
 * liquidity. The initial price (scaledB / scaledA × 1e8) must fall inside
 * [priceMin, priceMax]; the call reverts otherwise. The pool is immediately
 * active, assigned a monotonically increasing poolId, and indexed under the
 * canonical pair key so router views can discover it. Both tokens must pass
 * the saturnpools symbol validator, and since 4.2.6 each side must meet the v4
 * minimum pool size (saturnadmin.getMinScaledPoolUnits: 100 whole tokens per
 * side live). Also since 4.2.6 only the amount the 8-decimal scaled reserve
 * represents is taken; for a token with more than 8 decimals the sub-unit
 * remainder stays in your wallet. Only the creator (from) can later add or
 * remove liquidity.
 *
 * Usage: node Contract18scripts/createClPool.js <tokenA> <tokenB> <amountA> <amountB> <priceMin> <priceMax> <feePer10k>
 *   tokenA (string): Symbol of the first token (e.g. "SOUL").
 *   tokenB (string): Symbol of the second token (e.g. "KCAL").
 *   amountA (number): Raw (unscaled) amount of tokenA to deposit.
 *   amountB (number): Raw (unscaled) amount of tokenB to deposit.
 *   priceMin (number): Lower bound of the price range (scaled: tokenB per
 *   tokenA × 1e8). Must be > 0.
 *   priceMax (number): Upper bound of the price range. Must exceed priceMin.
 *   feePer10k (number): Swap fee in basis points out of 10,000 (e.g. 30 =
 *   0.3%). Must be within protocol min/max.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-createClPool
 */

const { send } = require("../common");

send({
  file: "Contract18scripts/createClPool.js",
  contract: "saturnclpools",
  method: "createClPool",
  params: [
    { name: "from", type: "address", desc: "Wallet that owns and seeds the pool; must be the transaction signer." },
    { name: "tokenA", type: "string", desc: "Symbol of the first token (e.g. \"SOUL\")." },
    { name: "tokenB", type: "string", desc: "Symbol of the second token (e.g. \"KCAL\")." },
    { name: "amountA", type: "number", desc: "Raw (unscaled) amount of tokenA to deposit." },
    { name: "amountB", type: "number", desc: "Raw (unscaled) amount of tokenB to deposit." },
    { name: "priceMin", type: "number", desc: "Lower bound of the price range (scaled: tokenB per tokenA × 1e8). Must be > 0." },
    { name: "priceMax", type: "number", desc: "Upper bound of the price range. Must exceed priceMin." },
    { name: "feePer10k", type: "number", desc: "Swap fee in basis points out of 10,000 (e.g. 30 = 0.3%). Must be within protocol min/max." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnclpools-createClPool",
});
