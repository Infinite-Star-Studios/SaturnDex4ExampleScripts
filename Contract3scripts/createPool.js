#!/usr/bin/env node
"use strict";

/**
 * saturnliquidity.createPool — write (signed transaction, needs PHANTASMA_WIF)
 * createPool(from: address, amountToken0: number, amountToken1: number, token0Symbol: string, token1Symbol: string, customFeePer10k: number)
 *
 * Creates a brand new pool for a token pair. The caller sets the starting
 * reserves and chooses the per-swap fee rate (in units of 1/10,000 — it must
 * fall inside the protocol range). On success the pool is registered, the
 * SATURN NFT certificate for this pool is minted to the caller, and the
 * caller's tokens are transferred into protocol custody. Several pools can
 * exist for the same pair, each with its own fee, which is why the router
 * scores pools instead of assuming one per pair.
 *
 * Returns void: Success = pool is created and NFT certificate minted to from.
 *
 * Usage: node Contract3scripts/createPool.js <amountToken0> <amountToken1> <token0Symbol> <token1Symbol> <customFeePer10k>
 *   amountToken0 (number): Raw amount of the first token to seed; at least
 *   saturnrouter.getMinRawForPoolCreation(token0Symbol), 100 whole tokens
 *   today (10,000,000,000 raw SOUL).
 *   amountToken1 (number): Raw amount of the second token to seed; at least
 *   getMinRawForPoolCreation(token1Symbol), 100 whole tokens today
 *   (1,000,000,000,000 raw KCAL).
 *   token0Symbol (string): Symbol of the first token.
 *   token1Symbol (string): Symbol of the second token.
 *   customFeePer10k (number): Per-swap fee rate in basis points (30–3000 by
 *   default).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnliquidity-createPool
 */

const { send } = require("../common");

send({
  file: "Contract3scripts/createPool.js",
  contract: "saturnliquidity",
  method: "createPool",
  params: [
    { name: "from", type: "address", desc: "Creator wallet (must be witness)." },
    { name: "amountToken0", type: "number", desc: "Raw amount of the first token to seed; at least saturnrouter.getMinRawForPoolCreation(token0Symbol), 100 whole tokens today (10,000,000,000 raw SOUL)." },
    { name: "amountToken1", type: "number", desc: "Raw amount of the second token to seed; at least getMinRawForPoolCreation(token1Symbol), 100 whole tokens today (1,000,000,000,000 raw KCAL)." },
    { name: "token0Symbol", type: "string", desc: "Symbol of the first token." },
    { name: "token1Symbol", type: "string", desc: "Symbol of the second token." },
    { name: "customFeePer10k", type: "number", desc: "Per-swap fee rate in basis points (30–3000 by default)." },
  ],
  walletIndex: 0,
  heavy: true, // mints an LP-NFT series: up to 3,000 KCAL of gas
  docs: "https://devops.saturnx.cc/reference#saturnliquidity-createPool",
});
