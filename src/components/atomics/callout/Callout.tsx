import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, toIntentMatch } from '~/system';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

const CLASSNAME = 'Root__Callout';

export interface CalloutProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;
}

export const Callout = React.forwardRef<ElementType, CalloutProps>(
  ({ children, className, intent = 'primary', ...others }, ref) => {
    return (
      <div
        {...others}
        ref={ref}
        className={clsx(
          className,
          CLASSNAME,
          toIntentMatch(
            {
              neutral: () => 'bg-neutral-0',
              light: () => 'bg-light-0',
              dark: () => 'bg-dark-0',
              primary: () => 'bg-primary-0',
              info: () => 'bg-info-0',
              success: () => 'bg-success-0',
              accent: () => 'bg-accent-0',
              warning: () => 'bg-warning-0',
              danger: () => 'bg-danger-0',
            },
            intent,
          ),
        )}
      >
        {children}
      </div>
    );
  },
);
