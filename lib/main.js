/*!
 * Copyright (c) 2018-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {config} from 'bedrock';
import {jsonLdDocumentLoader} from 'bedrock-jsonld-document-loader';
import {contexts as didContexts, constants as didConstants} from 'did-context';
import {
  contexts as v1Contexts, constants as v1Constants
} from 'veres-one-context';
import 'bedrock-ledger-context';

const {constants: bedrockConstants} = config;

for(const [contextUrl, context] of didContexts) {
  jsonLdDocumentLoader.addStatic(contextUrl, context);
}
for(const constant in didConstants) {
  bedrockConstants[constant] = didConstants[constant];
}

for(const [contextUrl, context] of v1Contexts) {
  jsonLdDocumentLoader.addStatic(contextUrl, context);
}
for(const constant in v1Constants) {
  bedrockConstants[constant] = v1Constants[constant];
}
