import { DrawerBody } from './Drawer.Body';
import { DrawerFooter } from './Drawer.Footer';
import { DrawerHeader } from './Drawer.Header';
import { DrawerMain } from './Drawer.Main';
import { DrawerRoot } from './Drawer.Root';

export const Drawer = Object.assign(DrawerRoot, {
  Main: DrawerMain,
  Header: DrawerHeader,
  Body: DrawerBody,
  Footer: DrawerFooter,
});
