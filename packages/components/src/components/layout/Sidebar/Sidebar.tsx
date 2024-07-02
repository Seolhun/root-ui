import { SidebarExpandedMenuGroup } from './Sidebar.ExpandedMenuGroup';
import { SidebarExpandedMenuItem } from './Sidebar.ExpandedMenuItem';
import { SidebarGroup } from './Sidebar.Group';
import { SidebarHeader } from './Sidebar.Header';
import { SidebarLinkGroup } from './Sidebar.LinkGroup';
import { SidebarMenuItem } from './Sidebar.MenuItem';
import { SidebarRoot } from './Sidebar.Root';

/**
 * - SidebarRoot
 *  - SidebarHeader
 *  - SidebarBody
 *   - SidebarGroup (ul)
 *    - SidebarLinkGroup (li)
 *    - SidebarMenu
 *    - ExpandedMenuItem (li)
 *    - ExpandedMenuGroup (div)
 */
export const Sidebar = Object.assign(SidebarRoot, {
  ExpandedMenuGroup: SidebarExpandedMenuGroup,
  ExpandedMenuItem: SidebarExpandedMenuItem,
  Group: SidebarGroup,
  Header: SidebarHeader,
  LinkGroup: SidebarLinkGroup,
  MenuItem: SidebarMenuItem,
});
