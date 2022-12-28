export * from './Drawer.types';
export * from './Drawer.Body';

export * from './Drawer';
import { Drawer as BaseDrawer } from './Drawer';
export * from './Drawer.Header';
import { DrawerHeader } from './Drawer.Header';
export * from './Drawer.Body';
import { DrawerBody } from './Drawer.Body';
export * from './Drawer.Footer';
import { DrawerFooter } from './Drawer.Footer';

export const Drawer = Object.assign(BaseDrawer, {
  Header: DrawerHeader,
  Body: DrawerBody,
  Footer: DrawerFooter,
});
