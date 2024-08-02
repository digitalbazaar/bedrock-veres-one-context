/*!
 * Copyright (c) 2018-2024 Digital Bazaar, Inc. All rights reserved.
 */
import {contexts as didContexts} from 'did-context';
import {contexts as v1Contexts} from 'veres-one-context';
import '@bedrock/ledger-context';

import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

jsonLdDocumentLoader.addDocuments({documents: [
  ...didContexts,
  ...v1Contexts
]});
