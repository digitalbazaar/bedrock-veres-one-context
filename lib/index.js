/*
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants}} = require('bedrock');

require('bedrock-ledger-context');

constants.DID_CONTEXT_URL = 'https://w3id.org/did/v0.11';
constants.CONTEXTS[constants.DID_CONTEXT_URL] = require('did-context');
constants.VERES_ONE_CONTEXT_URL = 'https://w3id.org/veres-one/v1';
constants.CONTEXTS[constants.VERES_ONE_CONTEXT_URL] =
  require('veres-one-context');
