import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../../system';

const CLASSNAME = 'Root__Select';
type ElementType = HTMLSelectElement;
type ElementProps = React.SelectHTMLAttributes<ElementType>;

export interface SelectProps extends ElementProps {
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

export const Select = React.forwardRef<ElementType, SelectProps>(
  ({ className, children, intent = 'primary', scale = 'md', ...others }, ref) => {
    return (
      <select
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'block w-full',
          'text-space-2 dark:text-cream-2',
          'bg-cream-1 dark:bg-space-1',
          'border border-neutral-2 dark:border-neutral-8',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'px-4',
          'rounded',
          toScaleMatch({
            lg: () => 'scale-text-lg scale-py-lg',
            md: () => 'scale-text-md scale-py-md',
            sm: () => 'scale-text-sm scale-py-sm',
            xl: () => 'scale-text-xl scale-py-xl',
            xs: () => 'scale-text-xs scale-py-xs',
          })(scale),
          toIntentMatch({
            accent: () => clsx('outline-accent dark:outline-accent'),
            danger: () => clsx('outline-danger dark:outline-danger'),
            info: () => clsx('outline-info dark:outline-info'),
            neutral: () => clsx('outline-neutral dark:outline-neutral'),
            primary: () => clsx('outline-primary dark:outline-primary'),
            success: () => clsx('outline-success dark:outline-success'),
            warning: () => clsx('outline-warning dark:outline-warning'),
          })(intent),
        )}
        id={others.name}
        ref={ref}
      >
        {children}
      </select>
    );
  },
);
