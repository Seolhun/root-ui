import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addComponents, theme }) {
  addComponents({
    '.Root__Checkbox': {
      '&:focus': {
        boxShadow: theme('boxShadow.outline'),
      },
      '&__Checkmark': {
        '&:after': {
          border: 'solid #E0E0E2',
          borderWidth: '0 0.15em 0.15em 0',
          content: '""',
          display: 'none',
          height: '0.5em',
          left: '0.45em',
          position: 'absolute',
          top: '0.25em',
          transform: 'rotate(45deg)',
          width: '0.25em',
        },
        backgroundColor: '#ccc',
        borderRadius: '50%',
        height: '1.3em',
        left: '0',
        position: 'relative',
        top: '0',
        transition: '300ms',
        width: '1.3em',
      },
      '&__Input': {
        cursor: 'pointer',
        height: '0',
        opacity: '0',
        position: 'absolute',
        width: '0',
      },
      '&__Input:checked ~ &__Checkmark': {
        '&:after': {
          border: 'solid #E0E0E2',
          borderWidth: '0 0.15em 0.15em 0',
          display: 'block',
          height: '0.5em',
          left: '0.45em',
          top: '0.25em',
          transform: 'rotate(45deg)',
          width: '0.25em',
        },
        animation: 'pulse 500ms ease-in-out',
        backgroundColor: '#0B6E4F',
        borderRadius: theme('borderRadius.md'),
      },
      cursor: 'pointer',
      display: 'block',
      fontSize: theme('fontSize.lg'),
      fontWeight: theme('fontWeight.medium'),
      height: '0',
      opacity: '0',
      position: 'relative',
      userSelect: 'none',
    },
    // '@keyframes pulse': {
    //   '0%': {
    //     boxShadow: '0 0 0 #0B6E4F90',
    //     rotate: '20deg',
    //   },
    //   '50%': {
    //     rotate: '-20deg',
    //   },
    //   '75%': {
    //     boxShadow: '0 0 0 10px #0B6E4F60',
    //   },
    //   '100%': {
    //     boxShadow: '0 0 0 13px #0B6E4F30',
    //     rotate: '0',
    //   },
    // },
  });
});
