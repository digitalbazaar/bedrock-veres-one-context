/*!
 * Copyright (c) 2018-2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {documentLoader} = require('bedrock-jsonld-document-loader');

describe('bedrock-veres-one-context', () => {
  it('sets up contexts properly', async () => {
    const testContextModules = [
      'did-context',
      'veres-one-context',
    ];
    for(const module of testContextModules) {
      const {contexts, constants: contextConstants} = require(module);

      for(const c in contextConstants) {
        if(!c.includes('URL')) {
          continue;
        }

        // ensure that context documents are defined
        const result = await documentLoader(contextConstants[c]);
        should.exist(result);
        should.exist(result.document);
        result.document.should.be.an('object');
        result.document.should.eql(contexts.get(contextConstants[c]));
      }
    }
  });
});
