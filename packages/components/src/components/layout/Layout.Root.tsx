import clsx from 'clsx';
import * as React from 'react';

import { LayoutProvider, LayoutProviderProps } from './Layout.Context';

const CLASSNAME = 'Root__Layout';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface LayoutRootProps extends LayoutProviderProps {}

export const LayoutRoot = React.forwardRef<ElementType, ElementProps & LayoutRootProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <LayoutProvider>
        <div {...others} className={clsx(CLASSNAME, className)} ref={ref}>
          {children}
        </div>
      </LayoutProvider>
    );
  },
);
