import { RootIntentType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';
import { tv } from 'tailwind-variants';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

const CLASSNAME = 'Root__Callout';

export interface CalloutProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntentType;
}

export const Callout = React.forwardRef<ElementType, CalloutProps>(
  ({ className, children, intent = 'primary', ...others }, ref) => {
    return (
      <div {...others} className={clsx(className, CLASSNAME, callout({ intent }))} ref={ref}>
        {children}
      </div>
    );
  },
);

const callout = tv({
  base: 'px-6 py-4 rounded border-l-4 shadow',
  variants: {
    intent: {
      accent: 'bg-accent-0 dark:bg-accent-1 border-accent',
      danger: 'bg-danger-0 dark:bg-danger-1 border-danger',
      info: 'bg-info-0 dark:bg-info-1 border-info',
      neutral: 'bg-neutral-0 dark:bg-neutral-1 border-neutral',
      primary: 'bg-primary-0 dark:bg-primary-1 border-primary',
      success: 'bg-success-0 dark:bg-success-1 border-success',
      warning: 'bg-warning-0 dark:bg-warning-1 border-warning',
    },
  },
});
