/**
 * @see https://github.com/animate-css/animate.css/tree/main/source
 */
const Animations = {
  keyframes: {
    wiggle: {
      '0%, 100%': {
        transform: 'rotate(-3deg)',
      },
      '50%': {
        transform: 'rotate(3deg)',
      },
    },
    'scale-up': {
      '0%': {
        transform: 'scale(0)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
    'scale-down': {
      '0%': {
        transform: 'scale(1)',
      },
      '100%': {
        transform: 'scale(0)',
      },
    },
    'scale-up-0.75': {
      '0%': {
        transform: 'scale(0.75)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
    'scale-down-0.75': {
      '0%': {
        transform: 'scale(1)',
      },
      '100%': {
        transform: 'scale(0.75)',
      },
    },
    'scale-up-0.5': {
      '0%': {
        transform: 'scale(0.5)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
    'scale-down-0.5': {
      '0%': {
        transform: 'scale(1)',
      },
      '100%': {
        transform: 'scale(0.5)',
      },
    },
    'fade-in': {
      '0%': {
        opacity: '0.5',
      },
      '100%': {
        opacity: '1',
      },
    },
    'fade-in-top': {
      '0%': {
        opacity: '0.5',
        transform: 'translate3d(0, -75%, 0)',
      },
      '100%': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)',
      },
    },
    'fade-in-right': {
      '0%': {
        opacity: '0.5',
        transform: 'translate3d(75%, 0, 0)',
      },
      '100%': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)',
      },
    },
    'fade-in-bottom': {
      '0%': {
        opacity: '0.5',
        transform: 'translate3d(0, 75%, 0)',
      },
      '100%': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)',
      },
    },
    'fade-in-left': {
      '0%': {
        opacity: '0.5',
        transform: 'translate3d(-75%, 0, 0)',
      },
      '100%': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)',
      },
    },
    /**
     * @example animate-[scale-down_1s_ease-in-out]
     * @example animate-[fade-in_0.2s_ease-out]
     * @example animate-[scale-down_1s_ease-in-out_infinite]
     */
    animation: {
      wiggle: 'wiggle',
      'scale-up': 'scale-up',
      'scale-down': 'scale-down',
      'scale-up-0.75': 'scale-up-0.75',
      'scale-down-0.75': 'scale-down-0.75',
      'scale-up-0.5': 'scale-up-0.5',
      'scale-down-0.5': 'scale-down-0.5',
      'fade-in': 'fade-in',
      'fade-in-top': 'fade-in-top',
      'fade-in-right': 'fade-in-right',
      'fade-in-bottom': 'fade-in-bottom',
      'fade-in-left': 'fade-in-left',
    },
  },
};

module.exports = {
  Animations,
};
