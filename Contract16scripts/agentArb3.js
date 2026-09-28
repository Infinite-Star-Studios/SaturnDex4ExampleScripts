#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.agentArb3 — write (signed transaction, needs PHANTASMA_WIF)
 * agentArb3(from: address, vaultId: number, baseIn: number, tokenX: string, tokenY: string, pool1: number, pool2: number, pool3: number, minProfit: number): number
 *
 * Three-pool (triangle) arbitrage with the vault's money: base → tokenX on
 * pool1, tokenX → tokenY on pool2, tokenY → base on pool3, in one transaction.
 * Same rules as agentArb: the vault must end with more base token than it
 * started (and at least minProfit more), measured on the contract's own
 * balance, and neither the tokenX nor the tokenY balance may end lower, or the
 * whole transaction reverts. Only the vault's agent can call it.
 *
 * Returns number: The depositors' part of the profit (profit − agent fee), raw
 * base token.
 *
 * Usage: node Contract16scripts/agentArb3.js <vaultId> <baseIn> <tokenX> <tokenY> <pool1> <pool2> <pool3> <minProfit>
 *   vaultId (number): An active vault.
 *   baseIn (number): Raw base token to trade; > 0 and <=
 *   getVaultTotalDeposits(vaultId).
 *   tokenX (string): First intermediate token; must differ from the base
 *   token and from tokenY.
 *   tokenY (string): Second intermediate token; must differ from the base
 *   token.
 *   pool1 (number): Pool holding exactly {baseToken, tokenX}.
 *   pool2 (number): Pool holding exactly {tokenX, tokenY}.
 *   pool3 (number): Pool holding exactly {tokenY, baseToken}.
 *   minProfit (number): Minimum gross profit in raw base token, before the
 *   agent fee; 0 accepts any profit above 0.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-agentArb3
 */

const { send } = require("../common");

send({
  file: "Contract16scripts/agentArb3.js",
  contract: "saturnvaults",
  method: "agentArb3",
  params: [
    { name: "from", type: "address", desc: "The vault's agent (witness)." },
    { name: "vaultId", type: "number", desc: "An active vault." },
    { name: "baseIn", type: "number", desc: "Raw base token to trade; > 0 and <= getVaultTotalDeposits(vaultId)." },
    { name: "tokenX", type: "string", desc: "First intermediate token; must differ from the base token and from tokenY." },
    { name: "tokenY", type: "string", desc: "Second intermediate token; must differ from the base token." },
    { name: "pool1", type: "number", desc: "Pool holding exactly {baseToken, tokenX}." },
    { name: "pool2", type: "number", desc: "Pool holding exactly {tokenX, tokenY}." },
    { name: "pool3", type: "number", desc: "Pool holding exactly {tokenY, baseToken}." },
    { name: "minProfit", type: "number", desc: "Minimum gross profit in raw base token, before the agent fee; 0 accepts any profit above 0." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnvaults-agentArb3",
});
