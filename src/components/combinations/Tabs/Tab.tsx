import { Tab as BaseTab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';
import { useRootGroupContext } from '../../common';

const CLASSNAME = 'Root__Tab';
type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;

export interface TabProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: RootIntent;
}

export const Tab = React.forwardRef<ElementType, TabProps>(({ children, className, ...rests }, ref) => {
  const { scale, intent } = useRootGroupContext();

  return (
    <BaseTab {...rests} ref={ref} as="li" className={clsx('w-full', 'outline-none')}>
      {({ selected }) => (
        <div
          className={clsx(
            CLASSNAME,
            className,
            'w-full text-center',
            'transition',
            'rounded',
            'cursor-pointer',
            toScaleMatch({
              xs: () => 'scale-p-xs',
              sm: () => 'scale-p-sm',
              md: () => 'scale-p-md',
              lg: () => 'scale-p-lg',
              xl: () => 'scale-p-xl',
            })(scale),
            toIntentMatch({
              neutral: () => clsx(selected ? 'solid-neutral' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              light: () => clsx(selected ? 'solid-light' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              dark: () => clsx(selected ? 'solid-dark' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              primary: () => clsx(selected ? 'solid-primary' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              info: () => clsx(selected ? 'solid-info' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              success: () => clsx(selected ? 'solid-success' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              accent: () => clsx(selected ? 'solid-accent' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              warning: () => clsx(selected ? 'solid-warning' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              danger: () => clsx(selected ? 'solid-danger' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
            })(intent),
          )}
        >
          {children}
        </div>
      )}
    </BaseTab>
  );
});
