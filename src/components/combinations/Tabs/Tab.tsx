import * as React from 'react';
import { Tab as BaseTab } from '@headlessui/react';
import clsx from 'clsx';

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
    <BaseTab {...rests} ref={ref} as="li" role="tab" className="w-full">
      {({ selected }) => (
        <div
          className={clsx(
            CLASSNAME,
            className,
            'w-full text-center',
            'transition',
            'rounded-xl',
            'cursor-pointer',
            toScaleMatch({
              xs: () => 'py-1 px-2',
              sm: () => 'py-1.5 px-2.5',
              md: () => 'py-1.5 px-3',
              lg: () => 'py-2 px-3.5',
              xl: () => 'py-2 px-4',
            })(scale),
            toIntentMatch({
              neutral: () => {
                return clsx(
                  selected ? 'solid-neutral' : 'text-space-1 dark:text-cream-1 hover:bg-neutral hover:text-cream-1',
                );
              },
              light: () => {
                return clsx(
                  selected ? 'solid-light' : 'text-space-1 dark:text-cream-1 hover:bg-light hover:text-cream-1',
                );
              },
              dark: () => {
                return clsx(
                  selected ? 'solid-dark' : 'text-space-1 dark:text-cream-1 hover:bg-dark hover:text-cream-1',
                );
              },
              primary: () => {
                return clsx(
                  selected ? 'solid-primary' : 'text-space-1 dark:text-cream-1 hover:bg-primary hover:text-cream-1',
                );
              },
              info: () => {
                return clsx(
                  selected ? 'solid-info' : 'text-space-1 dark:text-cream-1 hover:bg-info hover:text-cream-1',
                );
              },
              success: () => {
                return clsx(
                  selected ? 'solid-success' : 'text-space-1 dark:text-cream-1 hover:bg-success hover:text-cream-1',
                );
              },
              accent: () => {
                return clsx(
                  selected ? 'solid-accent' : 'text-space-1 dark:text-cream-1 hover:bg-accent hover:text-cream-1',
                );
              },
              warning: () => {
                return clsx(
                  selected ? 'solid-warning' : 'text-space-1 dark:text-cream-1 hover:bg-warning hover:text-cream-1',
                );
              },
              danger: () => {
                return clsx(
                  selected ? 'solid-danger' : 'text-space-1 dark:text-cream-1 hover:bg-danger hover:text-cream-1',
                );
              },
            })(intent),
          )}
        >
          {children}
        </div>
      )}
    </BaseTab>
  );
});
