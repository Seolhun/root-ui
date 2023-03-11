import { DrawerBody } from './Drawer.Body';
import { DrawerFooter } from './Drawer.Footer';
import { DrawerHeader } from './Drawer.Header';
import { DrawerRoot } from './Drawer.Root';

export const Drawer = Object.assign(DrawerRoot, {
  Header: DrawerHeader,
  Body: DrawerBody,
  Footer: DrawerFooter,
});
