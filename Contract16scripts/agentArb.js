#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.agentArb — write (signed transaction, needs PHANTASMA_WIF)
 * agentArb(from: address, vaultId: number, baseIn: number, riskToken: string, poolBuy: number, poolSell: number, minProfit: number): number
 *
 * Two-pool arbitrage with the vault's money. Swaps baseIn of the base token to
 * riskToken on poolBuy, then all of it back to the base token on poolSell, in
 * one transaction. The trade must end with more base token than it started
 * (and at least minProfit more), measured as the change in the contract's own
 * base balance rather than from swap return values, and the contract's
 * riskToken balance may not end lower; otherwise the whole transaction
 * reverts. The agent's fee (perfFeePer10k of the profit) is paid to it at once
 * and the rest is added to the vault's NAV, so the share price only rises.
 * Only the vault's agent can call it.
 *
 * Returns number: The depositors' part of the profit (profit − agent fee), raw
 * base token.
 *
 * Usage: node Contract16scripts/agentArb.js <vaultId> <baseIn> <riskToken> <poolBuy> <poolSell> <minProfit>
 *   vaultId (number): An active vault.
 *   baseIn (number): Raw base token to trade; > 0 and <=
 *   getVaultTotalDeposits(vaultId). A vault can never trade with other
 *   vaults' money, although they share the contract's balance.
 *   riskToken (string): The other token; both pools must hold exactly
 *   {baseToken, riskToken}.
 *   poolBuy (number): Pool for leg 1 (base → riskToken), where riskToken is
 *   cheap.
 *   poolSell (number): Pool for leg 2 (riskToken → base), where riskToken is
 *   dear. Must differ from poolBuy.
 *   minProfit (number): Minimum gross profit in raw base token, before the
 *   agent fee; 0 accepts any profit above 0.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-agentArb
 */

const { send } = require("../common");

send({
  file: "Contract16scripts/agentArb.js",
  contract: "saturnvaults",
  method: "agentArb",
  params: [
    { name: "from", type: "address", desc: "The vault's agent (witness)." },
    { name: "vaultId", type: "number", desc: "An active vault." },
    { name: "baseIn", type: "number", desc: "Raw base token to trade; > 0 and <= getVaultTotalDeposits(vaultId). A vault can never trade with other vaults' money, although they share the contract's bala..." },
    { name: "riskToken", type: "string", desc: "The other token; both pools must hold exactly {baseToken, riskToken}." },
    { name: "poolBuy", type: "number", desc: "Pool for leg 1 (base → riskToken), where riskToken is cheap." },
    { name: "poolSell", type: "number", desc: "Pool for leg 2 (riskToken → base), where riskToken is dear. Must differ from poolBuy." },
    { name: "minProfit", type: "number", desc: "Minimum gross profit in raw base token, before the agent fee; 0 accepts any profit above 0." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnvaults-agentArb",
});
