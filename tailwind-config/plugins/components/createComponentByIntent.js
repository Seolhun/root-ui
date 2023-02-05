const isObject = require('lodash/isObject');
const { intentColorKeys } = require('../../presets/Colors');

function createIntentComponent(componentName, intentColorKey, { light, dark }) {
  if (!isObject(light)) {
    throw new Error('Required "light" object to create intent component');
  }
  if (!isObject(dark)) {
    throw new Error('Required "dark" object to create intent component');
  }

  return {
    [`.${componentName}-${intentColorKey}`]: {
      ...light,
    },
    // Class Strategy
    [`.dark .${componentName}-${intentColorKey}`]: {
      ...dark,
    },
  };
}

function createComponentByIntent(componentName, intentCallback) {
  const createdComponents = intentColorKeys.reduce((acc, intentColorKey) => {
    return {
      ...acc,
      ...createIntentComponent(componentName, intentColorKey, intentCallback(intentColorKey)),
    };
  }, {});
  return createdComponents;
}

module.exports = {
  createComponentByIntent,
};
