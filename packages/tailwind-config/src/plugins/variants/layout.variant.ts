import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addVariant }) {
  addVariant('sidebar-expanded', ['&.sidebar-expanded', '.sidebar-expanded &']);
  addVariant('sidebar-collapsed', ['&.sidebar-collapsed', '.sidebar-collapsed &']);
  addVariant('sidebar-hidden', ['&.sidebar-hidden', '.sidebar-hidden &']);
});
