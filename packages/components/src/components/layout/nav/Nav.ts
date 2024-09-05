import { NavItemGroup } from './Nav.ItemGroup';
import { NavMenuItem } from './Nav.MenuItem';
import { NavExpandedItem } from './nav-expanded-Item';
import { NavRoot } from './NavRoot';

export const Nav = Object.assign(NavRoot, {
  ExpandedItem: NavExpandedItem,
  Group: NavItemGroup,
  MenuItem: NavMenuItem,
});
