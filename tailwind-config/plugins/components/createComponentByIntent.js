const { intentColorKeys } = require('../../presets/Colors');

function createIntentComponent(componentName, intentColorKey, styles) {
  const className = `.${componentName}-${intentColorKey}`;
  return {
    [className]: {
      ...styles,
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
