const merge = require('lodash/merge');

/**
 *
 * @param {string} rootValue
 * @param {Record<'50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', string>} colors
 * @returns
 */
function createRootColors(rootValue, colors = {}) {
  return merge({}, { '': rootValue }, colors);
}

module.exports = {
  createRootColors,
};
