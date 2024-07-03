import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addVariant }) {
  addVariant('sidebar-expanded', '.sidebar-expanded &');
  addVariant('sidebar-icon', '.sidebar-icon &');
});
