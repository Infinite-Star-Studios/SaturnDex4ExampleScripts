#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getContractTokenBalanceEach — read (free, no wallet)
 * getContractTokenBalanceEach(tokenSymbol: string): number
 *
 * Raw token balance at the saturnpools contract address. saturnpools holds no
 * tokens: reserves, unclaimed provider fees and holder rewards all sit at
 * saturnliquidity.getLiquidityAddress(), so this normally returns 0 (mainnet
 * SOUL reads 0).
 *
 * Returns number: Raw balance (not scaled).
 *
 * Usage: node Contract2scripts/getContractTokenBalanceEach.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getContractTokenBalanceEach
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getContractTokenBalanceEach.js",
  contract: "saturnpools",
  method: "getContractTokenBalanceEach",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getContractTokenBalanceEach",
});
