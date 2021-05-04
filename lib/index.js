/*!
 * Copyright (c) 2018-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants: bedrockConstants}} = require('bedrock');
const {jsonLdDocumentLoader} = require('bedrock-jsonld-document-loader');

require('bedrock-ledger-context');

const contextModules = [
  'did-context',
  'veres-one-context',
];

for(const module of contextModules) {
  const {contexts, constants: contextConstants} = require(module);
  for(const c in contextConstants) {
    bedrockConstants[c] = contextConstants[c];
  }
  for(const [url, context] of contexts) {
    jsonLdDocumentLoader.addStatic(url, context);
  }
}
