/**
 * @see https://github.com/animate-css/animate.css/tree/main/source
 */
const Animations = {
  keyframes: {
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    },
    'scale-up': {
      '0%': { transform: 'scale(0)' },
      '100%': { transform: 'scale(1)' },
    },
    'scale-down': {
      '0%': { transform: 'scale(1)' },
      '100%': { transform: 'scale(0)' },
    },
    'fade-in-right': {
      '0%': {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0)',
      },
      '100%': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)',
      },
    },
    'fade-in-bottom': {
      '0%': {
        opacity: '0',
        transform: 'translate3d(0, 100%, 0)',
      },
      '100%': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)',
      },
    },
    'fade-in-left': {
      '0%': {
        opacity: '0',
        transform: 'translate3d(-100%, 0, 0)',
      },
      '100%': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)',
      },
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      'scale-up': 'scale-up 0.2s ease-in-out',
      'scale-down': 'scale-down 0.2s ease-in-out',
      'fade-in-right': 'fade-in-right 0.2s ease-in-out',
      'fade-in-bottom': 'fade-in-bottom 0.2s ease-in-out',
      'fade-in-left': 'fade-in-left 0.2s ease-in-out',
    }
  }
};

module.exports = {
  Animations,
}
