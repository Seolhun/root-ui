import { LayoutActionButton } from './Layout.ActionButton';
import { LayoutBody } from './Layout.Body';
import { LayoutHeader } from './Layout.Header';
import { LayoutRoot } from './Layout.Root';
import { Nav } from './nav';
import { Sidebar } from './sidebar';

/**
 * Layout Hierarchy
 *   - Nav
 *   - Header
 *   - Body
 *   - Footer
 *   - Sidebar
 */
export const Layout = Object.assign(LayoutRoot, {
  ActionButton: LayoutActionButton,
  Body: LayoutBody,
  Header: LayoutHeader,
  Nav: Nav,
  Sidebar,
});
