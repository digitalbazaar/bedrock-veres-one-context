/*
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */

const constants = require('bedrock').config.constants;

require('bedrock-ledger-context');

constants.VERES_ONE_CONTEXT_URL = 'https://w3id.org/veres-one/v1';
constants.CONTEXTS[constants.VERES_ONE_CONTEXT_URL] =
  require('veres-one-context');
