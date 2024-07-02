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
  ({ className, children, ...others }, ref) => {
    const { sidebarOpen } = useLayoutContext();

    return (
      <div
        {...others}
        className={clsx(CLASSNAME, className, 'w-full', sidebarOpen ? 'sidebar-expanded' : 'sidebar-hidden')}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
