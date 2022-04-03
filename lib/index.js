/*!
 * Copyright (c) 2018-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';
import didContext from 'did-context';
import v1Context from 'veres-one-context';
import '@bedrock/ledger-context';

const contextModules = [
  didContext,
  v1Context
];

for(const {contexts} of contextModules) {
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}
