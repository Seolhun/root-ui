import clsx from 'clsx';
import * as React from 'react';

import { callout, CalloutVariants } from './Callout.styles';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

const CLASSNAME = 'Root__Callout';

export type CalloutProps = ElementProps & CalloutVariants;

export const Callout = React.forwardRef<ElementType, CalloutProps>(
  ({ children, className, intent = 'primary', ...others }, ref) => {
    return (
      <div {...others} className={clsx(className, CLASSNAME, callout({ intent }))} ref={ref}>
        {children}
      </div>
    );
  },
);
