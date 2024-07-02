import { NavExpandedProvider } from './Nav.ExpandedContext';
import { NavExpandedPanel } from './Nav.ExpandedPanel';
import { NavExpandedTrigger } from './Nav.ExpandedTrigger';

export const NavExpandedItem = Object.assign(NavExpandedProvider, {
  Panel: NavExpandedPanel,
  Trigger: NavExpandedTrigger,
});
