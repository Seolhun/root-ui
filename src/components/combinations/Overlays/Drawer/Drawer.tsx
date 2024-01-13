import { DrawerBody } from './Drawer.Body';
import { DrawerFooter } from './Drawer.Footer';
import { DrawerHeader } from './Drawer.Header';
import { DrawerPanel } from './Drawer.Panel';
import { DrawerRoot } from './Drawer.Root';

export const Drawer = Object.assign(DrawerRoot, {
  Body: DrawerBody,
  Footer: DrawerFooter,
  Header: DrawerHeader,
  Panel: DrawerPanel,
});
