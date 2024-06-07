import { Tab as BaseTab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch, useRootUI } from '../../../system';

const CLASSNAME = 'Root__Tab';
type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;

export interface TabProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const Tab = React.forwardRef<ElementType, TabProps>(({ children, className, ...others }, ref) => {
  const { intent, scale } = useRootUI({
    defaultIntent: 'primary',
    defaultScale: 'md',
    intent: others?.intent,
    scale: others?.scale,
  });

  return (
    <BaseTab {...others} as="li" className={clsx('w-full', 'outline-none')} ref={ref}>
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
              lg: () => 'scale-p-lg',
              md: () => 'scale-p-md',
              sm: () => 'scale-p-sm',
              xl: () => 'scale-p-xl',
              xs: () => 'scale-p-xs',
            })(scale),
            toIntentMatch({
              accent: () => clsx(selected ? 'solid-accent' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              danger: () => clsx(selected ? 'solid-danger' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              info: () => clsx(selected ? 'solid-info' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              neutral: () => clsx(selected ? 'solid-neutral' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              primary: () => clsx(selected ? 'solid-primary' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              success: () => clsx(selected ? 'solid-success' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
              warning: () => clsx(selected ? 'solid-warning' : 'text-space-1 dark:text-cream-1 hover:bg-neutral-1'),
            })(intent),
          )}
        >
          {children}
        </div>
      )}
    </BaseTab>
  );
});
