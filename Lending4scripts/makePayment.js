#!/usr/bin/env node
"use strict";

/**
 * saturnloans.makePayment — write (signed transaction, needs PHANTASMA_WIF)
 * makePayment(from: address, loanId: number, paymentAmount: number)
 *
 * Borrower repays part or all of their loan. The payment (raw units of the
 * loan token, TAZ) is converted to the ledger's 8-decimal scaled units and
 * split by its interest share: that share ×
 * saturnlendcfg.getProtocolFeeShare() (1,000 = 10% today) goes to the protocol
 * admin, the rest is credited to the lender's escrow balance in this contract
 * (the lender takes it with withdrawLenderBalance). Installment tracking and
 * the next-due timestamp are advanced automatically. If the payment clears the
 * balance (totalRepaid >= totalOwed) the loan moves to 2 (repaid), the pool
 * pledge is released and its SATURN certificate returned to the borrower, and
 * the credit score is updated; the TAZ reward is then claimable once through
 * claimRepaymentReward(loanId) within one reward day. The borrower can pay
 * while the loan is active, flagged or past due, until the lender defaults or
 * liquidates it. An overpayment is cut to the remaining balance, but the
 * wallet must hold the whole paymentAmount passed: the balance check runs
 * before the cut. Interest is fixed for the whole term, so paying early does
 * not lower it.
 *
 * Usage: node Lending4scripts/makePayment.js <loanId> <paymentAmount>
 *   loanId (number): ID of the active loan to pay against.
 *   paymentAmount (number): Raw-unit amount of the loan token to transfer.
 *   Clamped to remaining balance if larger.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-makePayment
 */

const { send } = require("../common");

send({
  file: "Lending4scripts/makePayment.js",
  contract: "saturnloans",
  method: "makePayment",
  params: [
    { name: "from", type: "address", desc: "Borrower's address — must be the transaction witness and the loan's registered borrower." },
    { name: "loanId", type: "number", desc: "ID of the active loan to pay against." },
    { name: "paymentAmount", type: "number", desc: "Raw-unit amount of the loan token to transfer. Clamped to remaining balance if larger." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnloans-makePayment",
});
