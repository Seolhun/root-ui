export * from './Drawer.types';
export * from './Drawer.Body';

export * from './Drawer';
import BaseDrawer from './Drawer';
export * from './Drawer.Header';
import Header from './Drawer.Header';
export * from './Drawer.Body';
import Body from './Drawer.Body';
export * from './Drawer.Footer';
import Footer from './Drawer.Footer';

const Drawer = {
  Base: BaseDrawer,
  Header,
  Body,
  Footer,
};

export { Drawer };
export default Drawer;
