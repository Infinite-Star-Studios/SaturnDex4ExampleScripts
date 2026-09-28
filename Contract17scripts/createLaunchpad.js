#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.createLaunchpad — write (signed transaction, needs PHANTASMA_WIF)
 * createLaunchpad(from: address, tokenA: string, tokenQuote: string, tokensForSale: number, quotePerA: number, poolFeePer10k: number, minFillPer10k: number, minCommitQuote: number, endTime: number)
 *
 * Creates a new fixed-price launchpad. The creator deposits the full
 * `tokensForSale` amount of `tokenA` into escrow at creation time. The sale
 * runs until `endTime` (max 14 days from now) or until the allocation sells
 * out. On activation the sold tokenA and the raised quote seed a Saturn pool
 * at the fee tier set by `poolFeePer10k`, so the pool opens at the sale price;
 * unsold tokenA goes back to the creator. Call
 * `saturnadmin.getMinPoolFeePer10k()` and `getMaxPoolFeePer10k()` to clamp the
 * fee input before submitting. `minFillPer10k` controls the minimum fill
 * required to activate (1000 = 10%, 10000 = 100% sellout required).
 * `minCommitQuote` is the smallest individual commitment accepted.
 *
 * Usage: node Contract17scripts/createLaunchpad.js <tokenA> <tokenQuote> <tokensForSale> <quotePerA> <poolFeePer10k> <minFillPer10k> <minCommitQuote> <endTime>
 *   tokenA (string): Symbol of the token being sold.
 *   tokenQuote (string): Symbol of the token buyers pay with (e.g. SOUL,
 *   KCAL, USDC).
 *   tokensForSale (number): Total raw units of tokenA being offered. Must be
 *   > 0 and available in creator's balance.
 *   quotePerA (number): Fixed price as a whole number: raw units of
 *   tokenQuote per 1 raw unit of tokenA. Must be > 0. Price per whole token
 *   = quotePerA × 10^(decimalsA − decimalsQuote): with equal decimals 2
 *   means 2 quote tokens per tokenA, and a price below 1 quote token per
 *   tokenA is only possible when tokenA has fewer decimals than the quote
 *   token.
 *   poolFeePer10k (number): Trading fee for the post-launch pool, in basis
 *   points per 10,000 (e.g. 30 = 0.3%). Must be within admin-configured
 *   min/max.
 *   minFillPer10k (number): Minimum fill needed to activate, per 10,000 of
 *   tokensForSale. Range: 1000–10000 (10%–100%).
 *   minCommitQuote (number): Minimum raw tokenQuote per commit call. Must be
 *   > 0. Every commit must also be a multiple of quotePerA, so pick a
 *   multiple here too.
 *   endTime (number): Unix timestamp when the funding window closes. Must be
 *   in the future and at most 14 days (1209600 s) from now.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-createLaunchpad
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/createLaunchpad.js",
  contract: "saturnlaunchpad",
  method: "createLaunchpad",
  params: [
    { name: "from", type: "address", desc: "Creator's address; must be the transaction witness. Receives unsold tokenA back at activation." },
    { name: "tokenA", type: "string", desc: "Symbol of the token being sold." },
    { name: "tokenQuote", type: "string", desc: "Symbol of the token buyers pay with (e.g. SOUL, KCAL, USDC)." },
    { name: "tokensForSale", type: "number", desc: "Total raw units of tokenA being offered. Must be > 0 and available in creator's balance." },
    { name: "quotePerA", type: "number", desc: "Fixed price as a whole number: raw units of tokenQuote per 1 raw unit of tokenA. Must be > 0. Price per whole token = quotePerA × 10^(decimalsA − decimalsQuo..." },
    { name: "poolFeePer10k", type: "number", desc: "Trading fee for the post-launch pool, in basis points per 10,000 (e.g. 30 = 0.3%). Must be within admin-configured min/max." },
    { name: "minFillPer10k", type: "number", desc: "Minimum fill needed to activate, per 10,000 of tokensForSale. Range: 1000–10000 (10%–100%)." },
    { name: "minCommitQuote", type: "number", desc: "Minimum raw tokenQuote per commit call. Must be > 0. Every commit must also be a multiple of quotePerA, so pick a multiple here too." },
    { name: "endTime", type: "number", desc: "Unix timestamp when the funding window closes. Must be in the future and at most 14 days (1209600 s) from now." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-createLaunchpad",
});
