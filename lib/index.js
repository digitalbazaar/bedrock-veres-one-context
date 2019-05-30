/*!
 * Copyright (c) 2018-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants: bedrockConstants}} = require('bedrock');

require('bedrock-ledger-context');

const contextModules = [
  'did-context',
  'veres-one-context',
];

for(const module of contextModules) {
  const {contexts, constants: contextConstants} = require(module);
  for(const c in contextConstants) {
    const contextUrl = contextConstants[c];
    bedrockConstants[c] = contextUrl;
    bedrockConstants.CONTEXTS[contextUrl] = contexts.get(contextUrl);
  }
}
