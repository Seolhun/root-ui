import { ModalWidgetProps } from '../Widgets';
import { DrawerContextValues } from './Drawer.Context';

export type DrawerPlacement = 'bottom' | 'left' | 'right' | 'top';

export type DrawerProps = ModalWidgetProps &
  DrawerContextValues & {
    children: React.ReactNode;
  };
