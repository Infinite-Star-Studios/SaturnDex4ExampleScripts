#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getTotalStaked — read (free, no wallet)
 * getTotalStaked(tokenSymbol: string): number
 *
 * Returns the total raw-unit amount of tokenSymbol currently staked across all
 * holders. This is the denominator of the reward accumulator, the cap on
 * saturnstakearb.executeArb's amountIn, and the balance settleArbLoan requires
 * this contract to hold again after every stake-arb loan. Pledge-locked stake
 * is included (it can be lent, since it always returns in the same
 * transaction). saturnswap takes the holder slice of a swap fee only when this
 * is > 0 for the input token.
 *
 * Returns number: Total staked supply in raw token units. Returns 0 if no one
 * has staked this token.
 *
 * Usage: node Contract21scripts/getTotalStaked.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getTotalStaked
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getTotalStaked.js",
  contract: "saturnholders",
  method: "getTotalStaked",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getTotalStaked",
});
