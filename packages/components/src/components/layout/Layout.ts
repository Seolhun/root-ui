import { LayoutBody } from './Layout.Body';
import { LayoutHeader } from './Layout.Header';
import { LayoutRoot } from './Layout.Root';
import { Nav } from './Nav';
import { Sidebar } from './Sidebar';

/**
 * Layout Hierarchy
 *   - Nav
 *   - Header
 *   - Body
 *   - Footer
 *   - Sidebar
 */
export const Layout = Object.assign(LayoutRoot, {
  Body: LayoutBody,
  Header: LayoutHeader,
  Nav: Nav,
  Sidebar,
});
