const plugin = require('tailwindcss/plugin');

const baseStyles = {
  '-webkit-box-orient': 'vertical',
  display: '-webkit-box',
  overflow: 'hidden',
};

const lineClamp = plugin(
  function ({ addUtilities, matchUtilities, theme, variants }) {
    const values = theme('lineClamp');

    matchUtilities(
      {
        'line-clamp': (value) => ({
          ...baseStyles,
          '-webkit-line-clamp': `${value}`,
        }),
      },
      { values },
    );

    addUtilities(
      [
        {
          '.line-clamp-none': {
            '-webkit-line-clamp': 'unset',
          },
        },
      ],
      variants('lineClamp'),
    );
  },
  {
    theme: {
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
      },
    },
    variants: {
      lineClamp: ['responsive'],
    },
  },
);

module.exports = lineClamp;
