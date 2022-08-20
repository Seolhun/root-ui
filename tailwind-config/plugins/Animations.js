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
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      'scale-up': 'scale-up 0.2s ease-in-out',
      'scale-down': 'scale-down 0.2s ease-in-out',
    }
  }
};

module.exports = {
  Animations,
}
