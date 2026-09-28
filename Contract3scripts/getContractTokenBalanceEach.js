#!/usr/bin/env node
"use strict";

/**
 * saturnliquidity.getContractTokenBalanceEach — read (free, no wallet)
 * getContractTokenBalanceEach(tokenSymbol: string): number
 *
 * Raw on-chain balance of one token held in custody by this contract: every v4
 * pool's reserve in that token (including syndicate, launchpad and
 * saturnclpools positions), plus provider fees and holder rewards not yet
 * claimed. Compare it with the sum of getPoolReserveA/B (scaled down) plus
 * pending fees to reconcile an indexer.
 *
 * Returns number: Raw units (token decimals) held by the contract.
 *
 * Usage: node Contract3scripts/getContractTokenBalanceEach.js <tokenSymbol>
 *   tokenSymbol (string): Token to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnliquidity-getContractTokenBalanceEach
 */

const { read } = require("../common");

read({
  file: "Contract3scripts/getContractTokenBalanceEach.js",
  contract: "saturnliquidity",
  method: "getContractTokenBalanceEach",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnliquidity-getContractTokenBalanceEach",
});
