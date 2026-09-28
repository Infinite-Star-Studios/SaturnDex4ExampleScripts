# SaturnDex4ExampleScripts

Ready-to-run Node.js examples for every method a user or bot calls on the
**Saturn DEX v4** contracts and the **Saturn Lending** contracts on
Phantasma: one script per method, **808 scripts** in total (694 reads, 114
writes) across 30 contracts.

Every script matches the live contracts on mainnet and devnet (versions in
the table below) and links to its entry in the developer docs at
https://devops.saturnx.cc.

**Not included:** admin-only methods, methods that only other Saturn
contracts can call, deprecated or disabled methods, and the auto-lending
contract (`saturnauto`, disabled in lending v1.0). They are all documented
on https://devops.saturnx.cc if you need them.

## 🌐 Links

- 📘 Developer docs: https://devops.saturnx.cc
- 🤖 Bots & AI agents guide: https://devops.saturnx.cc/agents
- 🧠 For AI agents: https://devops.saturnx.cc/llms.txt
- 🪐 Saturn app: https://ops.saturnx.cc

## Setup

Node.js 18 or newer.

```sh
npm install
cp .env.example .env
```

`.env`:

```sh
NETWORK=devnet            # devnet (default) or mainnet: test on devnet first
PHANTASMA_WIF=            # your wallet key: only needed for write scripts
```

Never commit your `.env`. It is in `.gitignore`.

## Usage

Every script takes the method's parameters on the command line, in order.
`--help` prints them with a description of each:

```sh
node Contract4scripts/swap.js --help
```

**Reads** are free and need no wallet:

```sh
node Contract16scripts/getAllVaultsStats.js
node Contract8scripts/getBestPoolForSwapV2.js SOUL KCAL 100000000 10
NETWORK=mainnet node Contract2scripts/getActivePoolsData.js
```

**Writes** are signed with `PHANTASMA_WIF`. The parameter that must be the
signer (`from`) is filled in with your wallet, so you leave it out:

```sh
# swap 0.02 SOUL for KCAL on pool 150, accept any output above 1 raw unit
node Contract4scripts/swap.js 150 2000000 SOUL KCAL 1

# place a limit order, then cancel it
node Contract14scripts/placeOrderV2.js 150 SOUL KCAL 2000000 999999999999 0 10 0
node Contract14scripts/cancelOrder.js <orderId>
```

A write prints the transaction hash, an explorer link, and `SUCCESS (Halt)`
with the fee, or `FAILED` with the contract's reason.

### Units

- **Numbers are raw integer units**, never decimals: 1 SOUL = `100000000`
  (8 decimals), 1 KCAL = `10000000000` (10 decimals), 1 TAZ = `1000000000`
  (9 decimals).
- Fees and bounties are per 10,000 (`30` = 0.30%).
- Times are unix seconds.

### Gas

Writes use gas price 100000 and a ceiling of 20 KCAL (3,000 KCAL for
`createPool` and `addLiquidity`, which mint an LP-NFT series). The node holds
the ceiling back and refunds what is not used; a swap costs about
0.05 KCAL. When your wallet cannot cover the ceiling the script lowers it,
or, for the two heavy calls, stops and tells you how much KCAL is needed.
Set `GAS_LIMIT` to override. Gas is paid even when a transaction fails.

### Good habits for bots

- Test on devnet first. Contract names are the same on both networks.
- Check `getContractVersion` before trading and compare it with the docs.
- Quote from reserves read just before you send, and always pass a real
  minimum output or minimum profit so a bad fill reverts instead of losing
  money.
- Views that return an address revert for ids that do not exist.

## Quick recipes

| Goal | Scripts |
|---|---|
| Find pools and quote | `Contract2scripts/getActivePoolsData.js`, `Contract8scripts/getPoolFullInfo.js`, `Contract8scripts/getBestPoolForSwapV2.js` |
| Swap | `Contract4scripts/swap.js` |
| Flash arbitrage with borrowed pool liquidity | `Contract20scripts/executeFlashArb.js` |
| Arbitrage with your own tokens | `Contract13scripts/executeArbitrage.js` |
| Arbitrage with borrowed staked tokens | `Contract22scripts/executeArb.js` |
| Run a strategy vault | `Contract16scripts/createVaultV2.js`, `agentArb.js`, `agentArb3.js` |
| Deposit in a vault | `Contract16scripts/deposit.js`, `withdrawV2.js` |
| Limit orders and keeper bounties | `Contract14scripts/placeOrderV2.js`, `executeOrder.js` |
| TWAMM streams and chunk bounties | `Contract19scripts/placeStreamingOrder.js`, `executeStreamingChunk.js` |
| Stake for swap-fee rewards | `Contract21scripts/stake.js`, `claim.js`, `unstake.js` |
| Borrow or lend TAZ (P2P) | `Lending6scripts/postLoanRequest.js`, `submitQuote.js`, `acceptQuote.js`, `Lending4scripts/makePayment.js` |
| Lock or burn pool liquidity | `Contract23scripts/lockPool.js`, `burnPool.js` |

Step-by-step guides for each: https://devops.saturnx.cc/agents

## How it works

Each script only names its contract, method and parameters and calls
`read()` or `send()` from [`common.js`](common.js). That file holds every
SDK step (building the script, signing, sending, waiting for the result,
decoding values) with comments, so it doubles as a reference for your own
code. Built on `phantasma-sdk-ts` 0.18.

## Contracts

Folder numbers match the contract numbers on https://devops.saturnx.cc.
`Lending5` (auto-lending) is disabled, so it has no folder.

| Folder | Contract | What it does | Live version | Reads | Writes |
|---|---|---|---|---|---|
| `Contract1scripts` | `saturnadmin` | Protocol Configuration | saturnadmin-4.4.0 | 21 | 0 |
| `Contract2scripts` | `saturnpools` | Pool Registry & Scaling | saturnpools-4.1.10 | 44 | 3 |
| `Contract3scripts` | `saturnliquidity` | Pool Creation & Liquidity | saturnliquidity-4.3.3 | 3 | 3 |
| `Contract4scripts` | `saturnswap` | AMM Swap Engine | saturnswap-4.4.3 | 2 | 1 |
| `Contract5scripts` | `saturnfees` | Provider Fee Vault | saturnfees-4.1.3 | 6 | 1 |
| `Contract6scripts` | `SATURN` | Pool Ownership NFT | saturnnft-4.1.5 | 12 | 0 |
| `Contract7scripts` | `saturnrewards` | Liquidity Mining Campaigns | saturnrewards-4.1.5 | 19 | 5 |
| `Contract8scripts` | `saturnrouter` | Router & Aggregated Views | saturnrouter-4.1.1 | 18 | 0 |
| `Contract9scripts` | `saturnbonds` | Securitized Fee Streams | saturnbonds-4.1.5 | 25 | 8 |
| `Contract10scripts` | `saturnrental` | Pool Rental Market | saturnrental-4.1.2 | 24 | 8 |
| `Contract11scripts` | `saturnfeeopts` | Fee Rate Options | saturnfeeopts-4.1.2 | 20 | 6 |
| `Contract12scripts` | `saturnsyndicate` | Liquidity Syndicate | saturnsyndicate-4.1.5 | 28 | 10 |
| `Contract13scripts` | `saturnarb` | Own-Capital Arbitrage Engine | saturnarb-4.4.0 | 6 | 1 |
| `Contract14scripts` | `saturnlimit` | On-Chain Limit Orders | saturnlimit-4.1.4 | 21 | 4 |
| `Contract15scripts` | `saturnpredict` | Pool Performance Prediction Market | saturnpredict-4.1.8 | 23 | 6 |
| `Contract16scripts` | `saturnvaults` | Agent Strategy Vaults | saturnvaults-4.2.0 | 38 | 8 |
| `Contract17scripts` | `saturnlaunchpad` | Fixed-Price Token Launches | saturnlaunchpad-4.1.5 | 34 | 12 |
| `Contract18scripts` | `saturnclpools` | Concentrated Liquidity Pools | saturnclpools-4.2.6 | 20 | 5 |
| `Contract19scripts` | `saturntwamm` | Time-Weighted Average Market Maker | saturntwamm-4.2.4 | 27 | 4 |
| `Contract20scripts` | `saturnflash` | Flash-Loan Arbitrage (Borrowed Liquidity) | saturnflash-4.2.4 | 10 | 1 |
| `Contract21scripts` | `saturnholders` | Holder Rewards (Stake-to-Earn) | saturnholders-4.4.2 | 15 | 4 |
| `Contract22scripts` | `saturnstakearb` | Permissionless Stake-Arbitrage | saturnstakearb-4.4.0 | 4 | 1 |
| `Contract23scripts` | `saturnlplock` | Liquidity Burn & Timed Lock | saturnlplock-1.0.0 | 20 | 3 |
| `Lending1scripts` | `saturnlendcfg` | Lending Protocol Configuration | — | 45 | 0 |
| `Lending2scripts` | `saturncredit` | Borrower Credit Score (0–1000) | — | 18 | 2 |
| `Lending3scripts` | `saturnvault` | Collateral Vault (LP-backed) | saturnvault-1.1.0 | 26 | 0 |
| `Lending4scripts` | `saturnloans` | Loan Ledger & Lifecycle | saturnloans-1.0.3 | 46 | 6 |
| `Lending6scripts` | `saturnmarket` | P2P Lending Marketplace | — | 47 | 5 |
| `Lending7scripts` | `saturndexadapt` | Dual-DEX Pricing Adapter (v3 + v4) | saturndexadapt-1.3.0 | 38 | 1 |
| `Lending8scripts` | `saturntaz` | TAZ Rewards & RA Pledging | saturntaz-1.2.3 | 34 | 6 |

## License & Disclaimer

This software is provided **"as is"**, without warranty of any kind, express or implied,
including but not limited to the warranties of merchantability, fitness for a particular purpose,
and noninfringement.

This project is licensed under the **MIT License**.

## Attribution

Made by **Infinite Star Studios**
