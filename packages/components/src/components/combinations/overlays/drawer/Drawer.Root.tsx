import * as React from 'react';

import { ModalWidgetRoot } from '../widgets';
import { DrawerContext } from './Drawer.Context';
import { DrawerProps } from './Drawer.types';

export const DrawerRoot = ({ children, placement = 'right', ...others }: DrawerProps) => {
  const contextValue = React.useMemo(() => {
    return {
      placement,
    };
  }, [placement]);

  return (
    <ModalWidgetRoot {...others}>
      <DrawerContext.Provider value={contextValue}>{children}</DrawerContext.Provider>
    </ModalWidgetRoot>
  );
};
