const { intentColors } = require('../../presets/Colors');
const { createComponentByIntent } = require('./createComponentByIntent');

const outlines = ({ theme }) => {
  return createComponentByIntent('outline', (intentColorKey) => {
    const lightIntentKey = intentColorKey;
    const darkIntentKey = `${intentColorKey}-7`;
    const defaultStyles = {
      borderWidth: '1px',
    };

    return {
      light: {
        ...defaultStyles,
        color: intentColors[lightIntentKey],
        borderColor: intentColors[lightIntentKey],
        backgroundColor: intentColors.white,

        '&:hover': {
          color: intentColors.white,
          backgroundColor: intentColors[lightIntentKey],
        },
      },
      /**
       * TODO: Dark background color is bad, will be changed.
       */
      dark: {
        ...defaultStyles,
        color: intentColors[darkIntentKey],
        borderColor: intentColors[darkIntentKey],
        backgroundColor: intentColors.space,

        '&:hover': {
          color: intentColors.space,
          backgroundColor: intentColors[darkIntentKey],
        },
      },
    };
  });
};

module.exports = {
  outlines,
};
