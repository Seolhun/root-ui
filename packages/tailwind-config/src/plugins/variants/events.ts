import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addVariant }) {
  addVariant('hocus', ['&:hover', '&:focus']);
  addVariant('checked', ['&:checked']);
});
