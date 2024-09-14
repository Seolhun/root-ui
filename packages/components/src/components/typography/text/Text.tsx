import clsx from 'clsx';
import * as React from 'react';

import { AgnosticTagProps } from '../../../system';

const CLASSNAME = 'Root__Text';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface TextProps {}

export const Text = React.forwardRef<ElementType, ElementProps & AgnosticTagProps & TextProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <p {...others} className={clsx(CLASSNAME, className, 'text-space-1 dark:text-cream-1')} ref={ref}>
        {children}
      </p>
    );
  },
);
