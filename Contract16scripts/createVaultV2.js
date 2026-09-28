#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.createVaultV2 — write (signed transaction, needs PHANTASMA_WIF)
 * createVaultV2(from: address, baseToken: string, perfFeePer10k: number, minDeposit: number, name: string, minHoldSeconds: number)
 *
 * Opens a vault for the market, with a name and a hold time. from becomes the
 * vault's agent: the only address that can trade it (agentArb, agentArb3),
 * rename it, lower its hold or close it; it cannot be handed over. The fee and
 * minimum deposit are fixed for good and the hold can later only be lowered,
 * so a vault's terms only get better for depositors.
 *
 * Usage: node Contract16scripts/createVaultV2.js <baseToken> <perfFeePer10k> <minDeposit> <name> <minHoldSeconds>
 *   baseToken (string): Symbol of the vault's only token: deposits,
 *   withdrawals, trades, profit and share price are all in it. Any token
 *   that exists on the chain is accepted, so depositors should trust the
 *   token as well as the agent.
 *   perfFeePer10k (number): Agent's cut of each trade's profit, per 10,000:
 *   100 (1%) to 3000 (30%).
 *   minDeposit (number): Minimum raw amount per deposit; must be > 0.
 *   name (string): 1–40 characters of printable ASCII. The chain counts
 *   UTF-8 bytes (40 at most) and phantasma-sdk-ts sends one byte per
 *   character, so non-ASCII characters are stored garbled.
 *   minHoldSeconds (number): How long each deposit must stay before it can
 *   be withdrawn: 0 (any time) to 2592000 (30 days). Stops money jumping in
 *   just before a trade and out just after.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-createVaultV2
 */

const { send } = require("../common");

send({
  file: "Contract16scripts/createVaultV2.js",
  contract: "saturnvaults",
  method: "createVaultV2",
  params: [
    { name: "from", type: "address", desc: "Agent address (witness), usually the bot's own key." },
    { name: "baseToken", type: "string", desc: "Symbol of the vault's only token: deposits, withdrawals, trades, profit and share price are all in it. Any token that exists on the chain is accepted, so dep..." },
    { name: "perfFeePer10k", type: "number", desc: "Agent's cut of each trade's profit, per 10,000: 100 (1%) to 3000 (30%)." },
    { name: "minDeposit", type: "number", desc: "Minimum raw amount per deposit; must be > 0." },
    { name: "name", type: "string", desc: "1–40 characters of printable ASCII. The chain counts UTF-8 bytes (40 at most) and phantasma-sdk-ts sends one byte per character, so non-ASCII characters are ..." },
    { name: "minHoldSeconds", type: "number", desc: "How long each deposit must stay before it can be withdrawn: 0 (any time) to 2592000 (30 days). Stops money jumping in just before a trade and out just after." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnvaults-createVaultV2",
});
