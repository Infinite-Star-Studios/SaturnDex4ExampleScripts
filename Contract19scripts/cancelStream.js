#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.cancelStream — write (signed transaction, needs PHANTASMA_WIF)
 * cancelStream(from: address, streamId: number)
 *
 * Cancels an active stream early. Returns all remaining unstreamed input AND
 * any accumulated output that has not yet been claimed — both in a single
 * call. Status is set to 2 (cancelled) and the stream is removed from the
 * active list. Only the stream owner may cancel. Once cancelled a stream
 * cannot be resumed.
 *
 * Usage: node Contract19scripts/cancelStream.js <streamId>
 *   streamId (number): ID of the stream to cancel.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-cancelStream
 */

const { send } = require("../common");

send({
  file: "Contract19scripts/cancelStream.js",
  contract: "saturntwamm",
  method: "cancelStream",
  params: [
    { name: "from", type: "address", desc: "Stream owner; must match the address that placed the order." },
    { name: "streamId", type: "number", desc: "ID of the stream to cancel." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturntwamm-cancelStream",
});
