import { NavExpandedItem } from './ExpandedItem';
import { NavItem } from './Nav.Item';
import { NavItemGroup } from './Nav.ItemGroup';
import { NavRoot } from './NavRoot';

export const Nav = Object.assign(NavRoot, {
  ExpandedItem: NavExpandedItem,
  Group: NavItemGroup,
  Item: NavItem,
});
