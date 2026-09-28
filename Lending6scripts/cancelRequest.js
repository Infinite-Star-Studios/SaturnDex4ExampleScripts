#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.cancelRequest — write (signed transaction, needs PHANTASMA_WIF)
 * cancelRequest(from: address, requestId: number): none
 *
 * Cancels an open loan request. Only the borrower who posted the request may
 * cancel it, and only while status is 1 (open). Sets status to 3 (cancelled)
 * and decrements totalOpenRequests. Outstanding quotes on the request remain
 * visible but lenders should withdrawQuote to recover their escrowed funds.
 *
 * Usage: node Lending6scripts/cancelRequest.js <requestId>
 *   requestId (number): ID of the loan request to cancel.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-cancelRequest
 */

const { send } = require("../common");

send({
  file: "Lending6scripts/cancelRequest.js",
  contract: "saturnmarket",
  method: "cancelRequest",
  params: [
    { name: "from", type: "address", desc: "Borrower's address. Must match the request's stored borrower and be the transaction witness." },
    { name: "requestId", type: "number", desc: "ID of the loan request to cancel." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnmarket-cancelRequest",
});
