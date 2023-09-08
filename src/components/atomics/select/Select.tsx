import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '~/system';

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
  ({ children, className, intent = 'primary', scale = 'md', ...others }, ref) => {
    return (
      <select
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'block w-full',
          'bg-cream-1 text-space-1',
          'dark:bg-space-1 dark:text-cream-1',
          'border border-cream-3 dark:border-space-3',
          'disabled:bg-neutral-1 disabled:border-neutral-4 disabled:placeholder:text-neutral-light',
          'px-4',
          'rounded',
          'px-4',
          toScaleMatch({
            lg: () => 'scale-text-lg scale-py-lg',
            md: () => 'scale-text-md scale-py-md',
            sm: () => 'scale-text-sm scale-py-sm',
            xl: () => 'scale-text-xl scale-py-xl',
            xs: () => 'scale-text-xs scale-py-xs',
          })(scale),
          toIntentMatch({
            accent: () => clsx('outline-accent dark:outline-accent2'),
            danger: () => clsx('outline-danger dark:outline-danger2'),
            dark: () => clsx('outline-dark dark:outline-dark2'),
            info: () => clsx('outline-info dark:outline-info2'),
            light: () => clsx('outline-light dark:outline-light2'),
            neutral: () => clsx('outline-neutral dark:outline-neutral2'),
            primary: () => clsx('outline-primary dark:outline-primary2'),
            success: () => clsx('outline-success dark:outline-success2'),
            warning: () => clsx('outline-warning dark:outline-warning2'),
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
