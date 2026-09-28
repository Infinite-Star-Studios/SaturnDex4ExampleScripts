#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.acceptQuote — write (signed transaction, needs PHANTASMA_WIF)
 * acceptQuote(from: address, quoteId: number): none
 *
 * Atomically accepts a lender's quote and opens the loan. The borrower's
 * collateral is pledged: saturnpools marks the pool pledged (getPoolPawned =
 * 1, financial lock 1) and its SATURN certificate moves into saturnvault
 * custody. The loan record is created in saturnloans, and the disbursement
 * (escrowed amount minus origination fee) is transferred to the borrower. The
 * origination fee goes to the protocol admin. Any rounding dust is returned to
 * the lender. Both the quote and the parent request are marked as accepted
 * (status 2) atomically. The resulting loanId is stored in
 * reqLoanId[requestId] for later retrieval. Single-token collateral quotes
 * (colType 1) are rejected as a defense-in-depth guard even if one somehow
 * existed. Other quotes on the request stay pending with their escrow until
 * their lenders call withdrawQuote. The quote's expiry is checked here, the
 * request's is not.
 *
 * Usage: node Lending6scripts/acceptQuote.js <quoteId>
 *   quoteId (number): ID of the lender's quote to accept.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-acceptQuote
 */

const { send } = require("../common");

send({
  file: "Lending6scripts/acceptQuote.js",
  contract: "saturnmarket",
  method: "acceptQuote",
  params: [
    { name: "from", type: "address", desc: "Borrower's address. Must own the request that the quote is for, and be the transaction witness." },
    { name: "quoteId", type: "number", desc: "ID of the lender's quote to accept." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnmarket-acceptQuote",
});
