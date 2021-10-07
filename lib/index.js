/*!
 * Copyright (c) 2019-2020 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const Driver = require('./Driver');

/**
 * Helper method to match the `.driver()` API of other `did-io` plugins.
 *
 * @param {object} options - The options for the driver instance.
 * @param {number} [options.maxCacheSize=100] - The maximum number of
 * @param {string} [options.method="key"] - Did method
 * @param {object} [options.service={}] - services
 * service
 *   resolved DID Documents to cache.
 *
 * @returns {{get, generate, keyToDidDoc}}
 */
module.exports.driver = (options = {}) => {
  return new Driver(options);
};
