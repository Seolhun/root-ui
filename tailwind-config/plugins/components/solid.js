const { intentColors } = require('../../presets/Colors');
const { createComponentByIntent } = require('./createComponentByIntent');

const solids = ({ theme }) => {
  return createComponentByIntent('solid', (intentColorKey) => {
    const lightIntents = {
      default: intentColorKey,
      text: `${intentColorKey}-1`,
      hover: `${intentColorKey}-6`,
    };
    const darkIntents = {
      default: intentColorKey,
      text: `${intentColorKey}-1`,
      hover: `${intentColorKey}-6`,
    };
    const defaultStyles = {};
    return {
      light: {
        ...defaultStyles,
        borderColor: intentColors[lightIntents.default],
        backgroundColor: intentColors[lightIntents.default],
        color: intentColors[lightIntents.text],

        '&:hover': {
          backgroundColor: intentColors[lightIntents.hover],
        },
      },
      /**
       * TODO: Dark background color is bad, will be changed.
       */
      dark: {
        ...defaultStyles,
        borderColor: intentColors[darkIntents.default],
        backgroundColor: intentColors[darkIntents.default],
        color: intentColors[darkIntents.text],

        '&:hover': {
          backgroundColor: intentColors[darkIntents.hover],
        },
      },
    };
  });
};

module.exports = {
  solids,
};
