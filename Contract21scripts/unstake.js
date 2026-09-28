#!/usr/bin/env node
"use strict";

/**
 * saturnholders.unstake — write (signed transaction, needs PHANTASMA_WIF)
 * unstake(from: address, tokenSymbol: string, amount: number)
 *
 * Withdraws amount raw units of tokenSymbol from the vault back to from.
 * Pending rewards are settled automatically before the stake is decremented,
 * so the user receives everything they've earned. Partial unstakes are
 * supported — only the requested amount is returned and the remainder
 * continues earning. If amount would reduce the stake to zero, the
 * distinct-stakers count is decremented. Any part of the stake locked by a
 * saturntaz pledge (getPledgeLocked) cannot be unstaked until saturntaz calls
 * unlockPledge. A saturnstakearb loan never blocks an unstake: it opens and
 * closes inside one transaction and the principal is re-checked before that
 * transaction commits.
 *
 * Usage: node Contract21scripts/unstake.js <tokenSymbol> <amount>
 *   tokenSymbol (string): Symbol of the token to withdraw.
 *   amount (number): Raw-unit amount to withdraw. Must be > 0 and ≤
 *   (stakedAmount - pledgeLocked).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-unstake
 */

const { send } = require("../common");

send({
  file: "Contract21scripts/unstake.js",
  contract: "saturnholders",
  method: "unstake",
  params: [
    { name: "from", type: "address", desc: "Staker's address. Must be the transaction witness." },
    { name: "tokenSymbol", type: "string", desc: "Symbol of the token to withdraw." },
    { name: "amount", type: "number", desc: "Raw-unit amount to withdraw. Must be > 0 and ≤ (stakedAmount - pledgeLocked)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnholders-unstake",
});
