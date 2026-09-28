#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.submitQuote — write (signed transaction, needs PHANTASMA_WIF)
 * submitQuote(from: address, requestId: number, interestRate: number, duration: number, offeredLoanAmount: number, colType: number, colTokenSymbol: string, colTokenAmount: number, colDexVersion: number, colPoolId: number, colNftId: number, message: string, expiresInSeconds: number): none
 *
 * Submits a lending quote against an open loan request. The lender specifies
 * their rate, duration, exact loan amount, and the collateral they require
 * from the borrower. The offered loan amount is immediately escrowed from the
 * lender's wallet into the contract so that acceptQuote does not require a
 * second lender signature. colType must be 2 and colPoolId must be the pool
 * the request offers (getRequestCollateralPoolId), still pledgeable by the
 * borrower; types 1 and 3 revert. Interest is simple and fixed when the quote
 * is accepted: principal × interestRate × duration / (10,000 × 31,536,000).
 * The lender must hold sufficient funds to cover offeredLoanAmount at time of
 * submission.
 *
 * Usage: node Lending6scripts/submitQuote.js <requestId> <interestRate> <duration> <offeredLoanAmount> <colType> <colTokenSymbol> <colTokenAmount> <colDexVersion> <colPoolId> <colNftId> <message> <expiresInSeconds>
 *   requestId (number): The open loan request this quote is for.
 *   interestRate (number): Annual rate per 10,000 (300 = 3% APR), prorated
 *   over duration. Must be > 0; no upper bound is enforced.
 *   duration (number): Loan term in seconds. Must be within saturnlendcfg's
 *   [minLoanDuration, maxLoanDuration] range.
 *   offeredLoanAmount (number): Raw-unit amount of the request's loan token
 *   the lender is willing to disburse. Immediately escrowed.
 *   colType (number): Must be 2 (the request's v4 pool). 1 and 3 revert.
 *   colTokenSymbol (string): Required token symbol for type-1 collateral.
 *   Pass empty string for types 2 and 3.
 *   colTokenAmount (number): Required token amount for type-1 collateral.
 *   Pass 0 for types 2 and 3.
 *   colDexVersion (number): DEX version used to price type-1 collateral.
 *   Pass 0 for types 2 and 3.
 *   colPoolId (number): Must equal the request's collateralPoolId
 *   (getRequestCollateralPoolId); a quote cannot ask for a different pool.
 *   colNftId (number): Unused (v3 LP NFT collateral is disabled). Pass 0.
 *   message (string): Optional note to the borrower (terms, conditions). May
 *   be empty.
 *   expiresInSeconds (number): Seconds the borrower has to accept. Not
 *   bounded by the contract. The escrow stays in saturnmarket after expiry
 *   until you call withdrawQuote.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-submitQuote
 */

const { send } = require("../common");

send({
  file: "Lending6scripts/submitQuote.js",
  contract: "saturnmarket",
  method: "submitQuote",
  params: [
    { name: "from", type: "address", desc: "Lender's address. Must be the transaction witness. Cannot be the borrower of the target request." },
    { name: "requestId", type: "number", desc: "The open loan request this quote is for." },
    { name: "interestRate", type: "number", desc: "Annual rate per 10,000 (300 = 3% APR), prorated over duration. Must be > 0; no upper bound is enforced." },
    { name: "duration", type: "number", desc: "Loan term in seconds. Must be within saturnlendcfg's [minLoanDuration, maxLoanDuration] range." },
    { name: "offeredLoanAmount", type: "number", desc: "Raw-unit amount of the request's loan token the lender is willing to disburse. Immediately escrowed." },
    { name: "colType", type: "number", desc: "Must be 2 (the request's v4 pool). 1 and 3 revert." },
    { name: "colTokenSymbol", type: "string", desc: "Required token symbol for type-1 collateral. Pass empty string for types 2 and 3." },
    { name: "colTokenAmount", type: "number", desc: "Required token amount for type-1 collateral. Pass 0 for types 2 and 3." },
    { name: "colDexVersion", type: "number", desc: "DEX version used to price type-1 collateral. Pass 0 for types 2 and 3." },
    { name: "colPoolId", type: "number", desc: "Must equal the request's collateralPoolId (getRequestCollateralPoolId); a quote cannot ask for a different pool." },
    { name: "colNftId", type: "number", desc: "Unused (v3 LP NFT collateral is disabled). Pass 0." },
    { name: "message", type: "string", desc: "Optional note to the borrower (terms, conditions). May be empty." },
    { name: "expiresInSeconds", type: "number", desc: "Seconds the borrower has to accept. Not bounded by the contract. The escrow stays in saturnmarket after expiry until you call withdrawQuote." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnmarket-submitQuote",
});
