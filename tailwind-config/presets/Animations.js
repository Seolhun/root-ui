/**
 * @see https://github.com/animate-css/animate.css/tree/main/source
 */
const Animations = {
  keyframes: {
    /**
     * @example animate-[scale-down_1s_ease-in-out]
     * @example animate-[fade-in_0.2s_ease-out]
     * @example animate-[scale-down_1s_ease-in-out_infinite]
     */
    animation: {
      'fade-in': 'fade-in',
      'fade-in-bottom': 'fade-in-bottom',
      'fade-in-left': 'fade-in-left',
      'fade-in-right': 'fade-in-right',
      'fade-in-top': 'fade-in-top',
      'scale-down': 'scale-down',
      'scale-down-0.5': 'scale-down-0.5',
      'scale-down-0.75': 'scale-down-0.75',
      'scale-up': 'scale-up',
      'scale-up-0.5': 'scale-up-0.5',
      'scale-up-0.75': 'scale-up-0.75',
      wiggle: 'wiggle',
    },
    'fade-in': {
      '0%': {
        opacity: '0.5',
      },
      '100%': {
        opacity: '1',
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
    'scale-down': {
      '0%': {
        transform: 'scale(1)',
      },
      '100%': {
        transform: 'scale(0)',
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
    'scale-down-0.75': {
      '0%': {
        transform: 'scale(1)',
      },
      '100%': {
        transform: 'scale(0.75)',
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
    'scale-up-0.5': {
      '0%': {
        transform: 'scale(0.5)',
      },
      '100%': {
        transform: 'scale(1)',
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
    wiggle: {
      '0%, 100%': {
        transform: 'rotate(-3deg)',
      },
      '50%': {
        transform: 'rotate(3deg)',
      },
    },
  },
};

module.exports = {
  Animations,
};
