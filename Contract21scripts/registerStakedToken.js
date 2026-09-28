#!/usr/bin/env node
"use strict";

/**
 * saturnholders.registerStakedToken — write (signed transaction, needs PHANTASMA_WIF)
 * registerStakedToken(tokenSymbol: string)
 *
 * Permissionless, idempotent utility that adds tokenSymbol to the enumeration
 * index (getStakedTokenSymbols / getStakedTokensData) if it has totalStaked >
 * 0 but is not yet listed. Only needed for tokens staked before the v4.4.1
 * enumeration index was introduced. New stakes self-register automatically
 * inside stake().
 *
 * Usage: node Contract21scripts/registerStakedToken.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol to backfill into the enumeration
 *   index.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-registerStakedToken
 */

const { send } = require("../common");

send({
  file: "Contract21scripts/registerStakedToken.js",
  contract: "saturnholders",
  method: "registerStakedToken",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol to backfill into the enumeration index." },
  ],
  walletIndex: -1,
  docs: "https://devops.saturnx.cc/reference#saturnholders-registerStakedToken",
});
