const isObject = require('lodash/isObject');

/**
 * @param {string[]} keyNames
 * @param {string} separator
 * @returns
 */
function joinClassName(keyNames, separator = '-') {
  return keyNames.filter(Boolean).join(separator);
}

/**
 * @param {string} prefix
 * @param {Record<PropertyKey, string | Record<PropertyKey, string>>} components
 * @return {Record<PropertyKey, any>}
 */
function createTailwindComponents(prefix, components) {
  return Object.entries(components).reduce((acc, [key, value]) => {
    const componentClassName = joinClassName([prefix, key]);
    if (isObject(value)) {
      const childComponents = Object.entries(value).reduce((nestedAcc, [nestedKey, nestedValue]) => {
        const nestedKeys = [componentClassName, nestedKey];
        const childComponentClassName = joinClassName(nestedKeys);
        return {
          ...nestedAcc,
          [`.${childComponentClassName}`]: nestedValue,
        };
      }, {});
      return {
        ...acc,
        ...childComponents,
      };
    }
    return {
      ...acc,
      [`.${componentClassName}`]: value,
    };
  }, {});
}

module.exports = {
  createTailwindComponents,
};
