import clsx from 'clsx';
import * as React from 'react';

import { LayoutProvider, LayoutProviderProps, useLayoutContext } from './Layout.Context';

const CLASSNAME = 'Root__Layout';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface LayoutRootProps extends LayoutProviderProps {}

export const LayoutRoot = React.forwardRef<ElementType, ElementProps & LayoutRootProps>(
  ({ children, ...others }, ref) => {
    return (
      <LayoutProvider>
        <BaseLayout {...others} ref={ref}>
          {children}
        </BaseLayout>
      </LayoutProvider>
    );
  },
);

export const BaseLayout = React.forwardRef<ElementType, ElementProps & LayoutRootProps>(
  ({ children, className, ...others }, ref) => {
    const { sidebarStatus } = useLayoutContext();

    return (
      <div
        {...others}
        className={clsx(CLASSNAME, className, 'w-full', {
          'sidebar-collapsed': sidebarStatus === 'collapsed',
          'sidebar-expanded': sidebarStatus === 'expanded',
          'sidebar-hidden': sidebarStatus === 'hidden',
        })}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
