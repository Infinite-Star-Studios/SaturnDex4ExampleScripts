#!/usr/bin/env node
"use strict";

/**
 * SATURN.holdsPoolCertificate — read (free, no wallet)
 * holdsPoolCertificate(from: address, poolId: number): number
 *
 * Returns 1 if `from` currently owns the SATURN NFT that certifies pool
 * `poolId`, 0 otherwise, including when the pool never had a certificate
 * (unknown poolId, or a syndicate / launchpad pool). A removed pool keeps its
 * certificate id, so if that certificate was not burned its holder still gets
 * 1: check saturnpools.getPoolActive too. removePool(), saturnfees (burned
 * pools), saturnlplock and the lending adapter use this check. Since
 * saturnpools 4.1.10 the provider normally equals the holder. The exceptions
 * are a pledged pool, whose certificate the lending vault holds while the
 * borrower stays provider, and a certificate with no getNftPoolId entry that
 * moved without claimPoolProvider.
 *
 * Returns number: 1 = holds the certificate, 0 = does not.
 *
 * Usage: node Contract6scripts/holdsPoolCertificate.js <from> <poolId>
 *   from (address): Wallet to test.
 *   poolId (number): Pool whose certificate is checked.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-holdsPoolCertificate
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/holdsPoolCertificate.js",
  contract: "SATURN",
  method: "holdsPoolCertificate",
  params: [
    { name: "from", type: "address", desc: "Wallet to test." },
    { name: "poolId", type: "number", desc: "Pool whose certificate is checked." },
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-holdsPoolCertificate",
});
