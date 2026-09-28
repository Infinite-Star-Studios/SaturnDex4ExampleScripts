#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.postLoanRequest — write (signed transaction, needs PHANTASMA_WIF)
 * postLoanRequest(from: address, loanTokenSymbol: string, loanDexVersion: number, loanAmount: number, collateralType: number, collateralTokenSymbol: string, collateralTokenAmount: number, collateralDexVersion: number, collateralPoolId: number, collateralNftId: number, preferredDuration: number, maxInterestRate: number, message: string, expiresInSeconds: number): none
 *
 * Publishes a new loan request to the P2P marketplace. The borrower declares
 * what token and how much they want to borrow, which DEX prices that token
 * against RA, and what LP collateral they are offering. collateralType must be
 * 2: a v4 pool of RA and TAZ that the borrower provides, whose SATURN
 * certificate the borrower holds, and that is free of pledges, financial
 * locks, campaigns, burn, time lock and fee redirect
 * (saturndexadapt.v4PoolPledgeable(from, poolId) = 1). Types 1 (single token)
 * and 3 (v3 LP NFT) revert. Only TAZ loans are accepted. Pass 0 for the fields
 * that don't apply to your collateral type (e.g.
 * collateralTokenSymbol/collateralTokenAmount/collateralDexVersion when using
 * a pool). The borrower is registered in saturncredit automatically. The
 * request takes quotes until cancelled, accepted, or expiresInSeconds elapses
 * (min 1 day, max 30 days).
 *
 * Usage: node Lending6scripts/postLoanRequest.js <loanTokenSymbol> <loanDexVersion> <loanAmount> <collateralType> <collateralTokenSymbol> <collateralTokenAmount> <collateralDexVersion> <collateralPoolId> <collateralNftId> <preferredDuration> <maxInterestRate> <message> <expiresInSeconds>
 *   loanTokenSymbol (string): Token to borrow. Must be TAZ in v1.0 and must
 *   have an RA pricing pool on the chosen DEX.
 *   loanDexVersion (number): DEX used to price the loan token against RA. 1
 *   = Saturn V3, 2 = Saturn V4.
 *   loanAmount (number): Raw-unit amount of loanTokenSymbol the borrower
 *   wants to receive.
 *   collateralType (number): 2 = v4 RA/TAZ pool (pledged). 1 (single token)
 *   and 3 (v3 LP NFT) revert.
 *   collateralTokenSymbol (string): Token symbol for type-1 collateral. Pass
 *   empty string for types 2 and 3.
 *   collateralTokenAmount (number): Raw-unit token amount for type-1
 *   collateral. Pass 0 for types 2 and 3.
 *   collateralDexVersion (number): DEX that prices the collateral token
 *   (type 1 only). Pass 0 for types 2 and 3.
 *   collateralPoolId (number): v4 pool ID the borrower is pledging: an
 *   active RA/TAZ pool the borrower provides and whose SATURN certificate
 *   the borrower holds, with no pledge, financial or campaign lock, burn,
 *   time lock or fee redirect.
 *   collateralNftId (number): Unused (v3 LP NFT collateral is disabled).
 *   Pass 0.
 *   preferredDuration (number): Preferred loan duration in seconds. Advisory
 *   only — lenders may quote different durations.
 *   maxInterestRate (number): Highest annual rate the borrower will accept,
 *   per 10,000 (500 = 5% APR). Advisory: lenders can still quote higher, so
 *   filter quotes before accepting.
 *   message (string): Optional freeform note shown to lenders (e.g. reason,
 *   preferred terms). May be empty.
 *   expiresInSeconds (number): Seconds from now until the request
 *   auto-expires. Range: 86400 (1 day) to 2592000 (30 days).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-postLoanRequest
 */

const { send } = require("../common");

send({
  file: "Lending6scripts/postLoanRequest.js",
  contract: "saturnmarket",
  method: "postLoanRequest",
  params: [
    { name: "from", type: "address", desc: "Borrower's address. Must be the transaction witness." },
    { name: "loanTokenSymbol", type: "string", desc: "Token to borrow. Must be TAZ in v1.0 and must have an RA pricing pool on the chosen DEX." },
    { name: "loanDexVersion", type: "number", desc: "DEX used to price the loan token against RA. 1 = Saturn V3, 2 = Saturn V4." },
    { name: "loanAmount", type: "number", desc: "Raw-unit amount of loanTokenSymbol the borrower wants to receive." },
    { name: "collateralType", type: "number", desc: "2 = v4 RA/TAZ pool (pledged). 1 (single token) and 3 (v3 LP NFT) revert." },
    { name: "collateralTokenSymbol", type: "string", desc: "Token symbol for type-1 collateral. Pass empty string for types 2 and 3." },
    { name: "collateralTokenAmount", type: "number", desc: "Raw-unit token amount for type-1 collateral. Pass 0 for types 2 and 3." },
    { name: "collateralDexVersion", type: "number", desc: "DEX that prices the collateral token (type 1 only). Pass 0 for types 2 and 3." },
    { name: "collateralPoolId", type: "number", desc: "v4 pool ID the borrower is pledging: an active RA/TAZ pool the borrower provides and whose SATURN certificate the borrower holds, with no pledge, financial o..." },
    { name: "collateralNftId", type: "number", desc: "Unused (v3 LP NFT collateral is disabled). Pass 0." },
    { name: "preferredDuration", type: "number", desc: "Preferred loan duration in seconds. Advisory only — lenders may quote different durations." },
    { name: "maxInterestRate", type: "number", desc: "Highest annual rate the borrower will accept, per 10,000 (500 = 5% APR). Advisory: lenders can still quote higher, so filter quotes before accepting." },
    { name: "message", type: "string", desc: "Optional freeform note shown to lenders (e.g. reason, preferred terms). May be empty." },
    { name: "expiresInSeconds", type: "number", desc: "Seconds from now until the request auto-expires. Range: 86400 (1 day) to 2592000 (30 days)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnmarket-postLoanRequest",
});
