#!/usr/bin/env node
"use strict";

/**
 * saturnloans.withdrawLenderBalance — write (signed transaction, needs PHANTASMA_WIF)
 * withdrawLenderBalance(from: address, tokenSymbol: string)
 *
 * The lender takes out everything escrowed for them in tokenSymbol. Since
 * 1.0.3 the lender's share of every makePayment is credited to this balance
 * instead of being sent to the lender, so a lender whose wallet refuses the
 * token cannot block repayments. The balance is zeroed before the transfer.
 *
 * Usage: node Lending4scripts/withdrawLenderBalance.js <tokenSymbol>
 *   tokenSymbol (string): Loan token, "TAZ" in v1.0.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-withdrawLenderBalance
 */

const { send } = require("../common");

send({
  file: "Lending4scripts/withdrawLenderBalance.js",
  contract: "saturnloans",
  method: "withdrawLenderBalance",
  params: [
    { name: "from", type: "address", desc: "Lender (must be the transaction witness)." },
    { name: "tokenSymbol", type: "string", desc: "Loan token, \"TAZ\" in v1.0." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnloans-withdrawLenderBalance",
});
