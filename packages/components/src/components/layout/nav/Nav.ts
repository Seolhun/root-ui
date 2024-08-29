import { NavItemGroup } from './Nav.ItemGroup';
import { NavMenuItem } from './Nav.MenuItem';
import { NavRoot } from './NavRoot';
import { NavExpandedItem } from './nav-expanded-Item';

export const Nav = Object.assign(NavRoot, {
  ExpandedItem: NavExpandedItem,
  Group: NavItemGroup,
  MenuItem: NavMenuItem,
});
