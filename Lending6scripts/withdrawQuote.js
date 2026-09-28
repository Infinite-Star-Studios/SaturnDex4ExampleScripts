#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.withdrawQuote — write (signed transaction, needs PHANTASMA_WIF)
 * withdrawQuote(from: address, quoteId: number): none
 *
 * Cancels a pending quote and refunds the escrowed loan amount to the lender.
 * Only the lender who submitted the quote may withdraw it, and only while it
 * is still pending (status 1). Sets status to 4 (withdrawn) and transfers the
 * escrowed funds back to from. Call this if the underlying request was
 * cancelled, expired or accepted with another quote, your quote expired, or
 * you need your funds back: nothing is refunded automatically.
 *
 * Usage: node Lending6scripts/withdrawQuote.js <quoteId>
 *   quoteId (number): ID of the quote to withdraw.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-withdrawQuote
 */

const { send } = require("../common");

send({
  file: "Lending6scripts/withdrawQuote.js",
  contract: "saturnmarket",
  method: "withdrawQuote",
  params: [
    { name: "from", type: "address", desc: "Lender's address. Must match quoteLender[quoteId] and be the transaction witness." },
    { name: "quoteId", type: "number", desc: "ID of the quote to withdraw." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnmarket-withdrawQuote",
});
