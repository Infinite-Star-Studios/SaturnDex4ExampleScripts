# DexV4Scripts

Per-method invocation scripts for the 16 Saturn DEX v4 contracts.  
Each contract has its own subfolder (`ContractNscripts/`) containing one  
Node.js file per public method.

## 🌐 Saturn DEX Access

Saturn DEX will be available at:  
👉 https://www.saturnx.cc

## Usage

1. Install deps from PlaygroundPhantasma root:
   ```sh
   npm install phantasma-sdk-ts dotenv
   ```
2. Create a `.env` with `PHANTASMA_WIF=<your wif>` (only required for
   write/transaction scripts).
3. Run any script:
   ```sh
   node DexV4Scripts/Contract4scripts/swap.js
   ```

Read-only methods (with a return type and no `from: address` parameter)
use `invokeRawScript` and never need a wallet.  
Write methods build, sign and broadcast a transaction with `AllowGas /
CallContract / SpendGas` like the existing `DEXScripts/swapKcalToSoul.js`.

## Contracts

| # | Folder | Contract Name | Source | Methods |
|---|--------|---------------|--------|---------|
| 1 | `Contract1scripts` | `saturnadmin` | 1_AdminConfig.tomb | 29 |
| 2 | `Contract2scripts` | `saturnpools` | 2_PoolRegistry.tomb | 44 |
| 3 | `Contract3scripts` | `saturnliquidity` | 3_LiquidityManager.tomb | 3 |
| 4 | `Contract4scripts` | `saturnswap` | 4_SwapEngine.tomb | 3 |
| 5 | `Contract5scripts` | `saturnfees` | 5_FeeVault.tomb | 7 |
| 6 | `Contract6scripts` | `SATURN` | 6_PoolNFT.tomb | 4 |
| 7 | `Contract7scripts` | `saturnrewards` | 7_RewardCampaigns.tomb | 17 |
| 8 | `Contract8scripts` | `saturnrouter` | 8_RouterViews.tomb | 15 |
| 9 | `Contract9scripts` | `saturnbonds` | 9_BondMarket.tomb | 18 |
| 10 | `Contract10scripts` | `saturnrental` | 10_PoolRental.tomb | 17 |
| 11 | `Contract11scripts` | `saturnfeeopts` | 11_FeeOptions.tomb | 16 |
| 12 | `Contract12scripts` | `saturnsyndicate` | 12_Syndicate.tomb | 19 |
| 13 | `Contract13scripts` | `saturnarb` | 13_FlashArbitrage.tomb | 7 |
| 14 | `Contract14scripts` | `saturnlimit` | 14_LimitOrders.tomb | 16 |
| 15 | `Contract15scripts` | `saturnpredict` | 15_PredictionMarket.tomb | 23 |
| 16 | `Contract16scripts` | `saturnvaults` | 16_AgentVaults.tomb | 19 |

**Total scripts: 257**

## License & Disclaimer

This software is provided **"as is"**, without warranty of any kind, express or implied,  
including but not limited to the warranties of merchantability, fitness for a particular purpose,  
and noninfringement.

This project is licensed under the **MIT License**.

## Attribution

Made by **Infinite Star Studios**