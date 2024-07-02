import { NavExpandedItem } from './ExpandedItem';
import { NavIconButton } from './Nav.IconButton';
import { NavItem } from './Nav.Item';
import { NavItemGroup } from './Nav.ItemGroup';
import { NavRoot } from './NavRoot';

export const Nav = Object.assign(NavRoot, {
  ExpandedItem: NavExpandedItem,
  Group: NavItemGroup,
  IconButton: NavIconButton,
  Item: NavItem,
});
