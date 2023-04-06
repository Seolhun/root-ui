import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '~/system';

const CLASSNAME = 'Root__Select';
type ElementType = HTMLSelectElement;
type ElementProps = React.SelectHTMLAttributes<ElementType>;

export interface SelectProps extends ElementProps {
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

export const Select = React.forwardRef<ElementType, SelectProps>(
  ({ children, className, scale = 'md', intent = 'primary', ...others }, ref) => {
    return (
      <select
        {...others}
        ref={ref}
        id={others.name}
        className={clsx(
          CLASSNAME,
          className,
          'block w-full',
          'border border-cream-3 dark:border-space-3',
          'shadow rounded',
          'px-2',
          toScaleMatch({
            xs: () => 'text-2 py-1',
            sm: () => 'text-2.5 py-1.5',
            md: () => 'text-3 py-1.5',
            lg: () => 'text-3.5 py-2',
            xl: () => 'text-4 py-2',
          })(scale),
          toIntentMatch({
            neutral: () => clsx('outline-neutral dark:outline-neutral2'),
            light: () => clsx('outline-light dark:outline-light2'),
            dark: () => clsx('outline-dark dark:outline-dark2'),
            primary: () => clsx('outline-primary dark:outline-primary2'),
            info: () => clsx('outline-info dark:outline-info2'),
            success: () => clsx('outline-success dark:outline-success2'),
            accent: () => clsx('outline-accent dark:outline-accent2'),
            warning: () => clsx('outline-warning dark:outline-warning2'),
            danger: () => clsx('outline-danger dark:outline-danger2'),
          })(intent),
        )}
      >
        {children}
      </select>
    );
  },
);
