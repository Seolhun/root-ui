import { DrawerBackdrop } from './Drawer.Backdrop';
import { DrawerBody } from './Drawer.Body';
import { DrawerFooter } from './Drawer.Footer';
import { DrawerHeader } from './Drawer.Header';
import { DrawerOverlay } from './Drawer.Overlay';
import { DrawerPanel } from './Drawer.Panel';
import { DrawerRoot } from './Drawer.Root';

export const Drawer = Object.assign(DrawerRoot, {
  Backdrop: DrawerBackdrop,
  Body: DrawerBody,
  Footer: DrawerFooter,
  Header: DrawerHeader,
  Overlay: DrawerOverlay,
  Panel: DrawerPanel,
});
