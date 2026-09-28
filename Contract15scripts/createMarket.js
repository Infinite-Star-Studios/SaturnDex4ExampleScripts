#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.createMarket — write (signed transaction, needs PHANTASMA_WIF)
 * createMarket(from: address, poolId: number, metricType: number, threshold: number, endTime: number, betToken: string, minBet: number)
 *
 * Open a new prediction market on a v4 pool's provider fees. metricType must
 * be 1 — the only metric that cannot be pushed around at settlement, because
 * lifetime fees never decrease. The metric is
 * saturnfees.getProviderLifetimeFees(poolId, tokenA) +
 * getProviderLifetimeFees(poolId, tokenB), both already in 8-decimal scaled
 * units (fee basis 2 since 4.1.8). Its current value is snapshotted so the
 * first claim after endTime can compute the delta. Since 4.1.7 there is no
 * fixed one-hour minimum: the market only has to last getMinDuration() seconds
 * (0 on mainnet, so any future endTime works).
 *
 * Usage: node Contract15scripts/createMarket.js <poolId> <metricType> <threshold> <endTime> <betToken> <minBet>
 *   poolId (number): The active pool whose metric is being forecast.
 *   metricType (number): Must be 1: the pool's lifetime provider fees,
 *   tokenA + tokenB, in 8-decimal scaled units. 2 (k = resA * resB) and 3
 *   (price) are refused at creation.
 *   threshold (number): How much the metric must INCREASE over the snapshot
 *   for OVER to win (delta >= threshold). Must be > 0. Units: 8-decimal
 *   scaled fees with tokenA and tokenB added together, so 100000000 = 1
 *   whole token of fees.
 *   endTime (number): Unix seconds when betting closes and claims open. Must
 *   be in the future and at least getMinDuration() seconds from now (0 on
 *   mainnet: no minimum).
 *   betToken (string): Token symbol used for all bets and payouts. Must
 *   exist on chain, else "Token does not exist: <symbol>".
 *   minBet (number): Minimum raw bet amount any single wager must meet.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-createMarket
 */

const { send } = require("../common");

send({
  file: "Contract15scripts/createMarket.js",
  contract: "saturnpredict",
  method: "createMarket",
  params: [
    { name: "from", type: "address", desc: "Market creator — must be a witness. Has permission to cancelMarket before bets are placed." },
    { name: "poolId", type: "number", desc: "The active pool whose metric is being forecast." },
    { name: "metricType", type: "number", desc: "Must be 1: the pool's lifetime provider fees, tokenA + tokenB, in 8-decimal scaled units. 2 (k = resA * resB) and 3 (price) are refused at creation." },
    { name: "threshold", type: "number", desc: "How much the metric must INCREASE over the snapshot for OVER to win (delta >= threshold). Must be > 0. Units: 8-decimal scaled fees with tokenA and tokenB ad..." },
    { name: "endTime", type: "number", desc: "Unix seconds when betting closes and claims open. Must be in the future and at least getMinDuration() seconds from now (0 on mainnet: no minimum)." },
    { name: "betToken", type: "string", desc: "Token symbol used for all bets and payouts. Must exist on chain, else \"Token does not exist: <symbol>\"." },
    { name: "minBet", type: "number", desc: "Minimum raw bet amount any single wager must meet." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnpredict-createMarket",
});
