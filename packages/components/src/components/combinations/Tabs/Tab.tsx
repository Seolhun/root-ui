import { Tab as HeadlessTab, TabProps as HeadlessTabProps } from '@headlessui/react';
import { RootIntentType, RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

import { toIntentMatch, toScaleMatch } from '~/system';

const CLASSNAME = 'Root__Tab';
type ElementType = HTMLLIElement;

export interface TabProps extends HeadlessTabProps<'li'> {
  /**
   * @default primary
   */
  intent?: RootIntentType;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScaleType;
}

export const Tab = React.forwardRef<ElementType, TabProps>(
  ({ className, children, intent = 'primary', scale = 'md', ...others }, ref) => {
    return (
      <HeadlessTab {...others} as="li" className={clsx('w-full', 'outline-none')} ref={ref}>
        {(args) => {
          const { selected } = args;
          return (
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
              {typeof children === 'function' ? children(args) : children}
            </div>
          );
        }}
      </HeadlessTab>
    );
  },
);
