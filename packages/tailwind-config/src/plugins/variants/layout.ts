import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addVariant }) {
  /**
   * Sidebar variants
   * - sidebar-expanded (sidebar is expanded)
   * - sidebar-icon (sidebar is icon only)
   * - sidebar-hidden (sidebar is hidden)
   */
  addVariant('sidebar-expanded', '.sidebar-expanded &');
  addVariant('sidebar-icon', '.sidebar-icon &');
});
