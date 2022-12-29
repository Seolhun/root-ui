import React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';

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
  ({ children, className, scale = 'md', intent = 'primary', ...rests }, ref) => {
    return (
      <select
        {...rests}
        ref={ref}
        id={rests.name}
        className={clsx(
          CLASSNAME,
          className,
          'shadow-sm border border-gray-4 focus:ring-gray-800 block w-full sm:text-sm rounded-md',
          'px-2',
          toScaleMatch({
            xs: () => 'text-2 py-1',
            sm: () => 'text-2.5 py-1.5',
            md: () => 'text-3 py-1.5',
            lg: () => 'text-3.5 py-2',
            xl: () => 'text-4 py-2',
          })(scale),
          toIntentMatch({
            default: () => clsx('outline-default dark:outline-default'),
            neutral: () => clsx('outline-neutral dark:outline-neutral'),
            light: () => clsx('outline-light dark:outline-light'),
            dark: () => clsx('outline-dark dark:outline-dark'),
            primary: () => clsx('outline-primary dark:outline-primary'),
            info: () => clsx('outline-info dark:outline-info'),
            success: () => clsx('outline-success dark:outline-success'),
            warning: () => clsx('outline-warning dark:outline-warning'),
            danger: () => clsx('outline-danger dark:outline-danger'),
          })(intent),
        )}
      >
        {children}
      </select>
    );
  },
);
