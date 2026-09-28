#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.createSyndicateV2 — write (signed transaction, needs PHANTASMA_WIF)
 * createSyndicateV2(from: address, tokenA: string, tokenB: string, targetA: number, targetB: number, feePer10k: number, ratioA: number, ratioB: number, minFillPer10k: number)
 *
 * Anyone can open a new syndicate funding round for a token pair. Sets the
 * fundraising targets, the ratio every contribution must respect (targetA :
 * targetB must equal ratioA : ratioB), the minimum fill (per 10k of both
 * targets) required before activation, and the eventual pool's fee rate. No
 * tokens move at creation.
 *
 * Usage: node Contract12scripts/createSyndicateV2.js <tokenA> <tokenB> <targetA> <targetB> <feePer10k> <ratioA> <ratioB> <minFillPer10k>
 *   tokenA (string): First token of the pair.
 *   tokenB (string): Second token of the pair.
 *   targetA (number): Raw amount of tokenA to raise.
 *   targetB (number): Raw amount of tokenB to raise.
 *   feePer10k (number): Fee of the pool that will be created (inside the
 *   protocol range).
 *   ratioA (number): tokenA side of the contribution ratio, in raw units:
 *   every contribution must satisfy amountA * ratioB == amountB * ratioA.
 *   For 2 SOUL : 5 KCAL (8 and 10 decimals) use 2 : 500.
 *   ratioB (number): tokenB side of the contribution ratio, in raw units.
 *   targetA * ratioB must equal targetB * ratioA.
 *   minFillPer10k (number): Minimum fill of both targets before
 *   activateSyndicate() is allowed, 1000 (10%) .. 10000 (100%).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-createSyndicateV2
 */

const { send } = require("../common");

send({
  file: "Contract12scripts/createSyndicateV2.js",
  contract: "saturnsyndicate",
  method: "createSyndicateV2",
  params: [
    { name: "from", type: "address", desc: "Creator (witness)." },
    { name: "tokenA", type: "string", desc: "First token of the pair." },
    { name: "tokenB", type: "string", desc: "Second token of the pair." },
    { name: "targetA", type: "number", desc: "Raw amount of tokenA to raise." },
    { name: "targetB", type: "number", desc: "Raw amount of tokenB to raise." },
    { name: "feePer10k", type: "number", desc: "Fee of the pool that will be created (inside the protocol range)." },
    { name: "ratioA", type: "number", desc: "tokenA side of the contribution ratio, in raw units: every contribution must satisfy amountA * ratioB == amountB * ratioA. For 2 SOUL : 5 KCAL (8 and 10 deci..." },
    { name: "ratioB", type: "number", desc: "tokenB side of the contribution ratio, in raw units. targetA * ratioB must equal targetB * ratioA." },
    { name: "minFillPer10k", type: "number", desc: "Minimum fill of both targets before activateSyndicate() is allowed, 1000 (10%) .. 10000 (100%)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-createSyndicateV2",
});
