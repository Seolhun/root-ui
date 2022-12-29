import * as React from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { RootIntent, toIntentMatch } from '../../../system';

const CLASSNAME = 'Root__Tab__List';
type ElementType = HTMLUListElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TabListProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;
}

export const TabList = React.forwardRef<ElementType, TabListProps>(
  ({ children, className, intent = 'primary', ...rests }, ref) => {
    return (
      <Tab.List
        {...rests}
        ref={ref}
        as="ul"
        role="tablist"
        className={clsx(
          CLASSNAME,
          className,
          'flex space-x-1',
          'rounded-xl',
          'p-1',
          toIntentMatch({
            default: () => clsx('bg-default-4/10 dark:bg-default-4/30'),
            neutral: () => clsx('bg-neutral-4/10 dark:bg-neutral-4/30'),
            light: () => clsx('bg-light-4/10 dark:bg-light-4/30'),
            dark: () => clsx('bg-dark-4/10 dark:bg-dark-4/30'),
            primary: () => clsx('bg-primary-4/10 dark:bg-primary-4/30'),
            info: () => clsx('bg-info-4/10 dark:bg-info-4/30'),
            success: () => clsx('bg-success-4/10 dark:bg-success-4/30'),
            warning: () => clsx('bg-warning-4/10 dark:bg-warning-4/30'),
            danger: () => clsx('bg-danger-4/10 dark:bg-danger-4/30'),
          })(intent),
        )}
      >
        {children}
      </Tab.List>
    );
  },
);
