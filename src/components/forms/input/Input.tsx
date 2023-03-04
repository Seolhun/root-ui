import * as React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';
import { Box } from '../../common';

const CLASSNAME = 'Root__Input';
type ElementType = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<ElementType>;
export interface InputProps extends ElementProps {
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

const Input = React.forwardRef<ElementType, InputProps>(
  ({ className, scale = 'md', intent = 'primary', ...rests }, ref) => {
    return (
      <Box
        {...rests}
        as="input"
        ref={ref}
        id={rests.name}
        scaleClassName={toScaleMatch({
          xs: () => 'text-2 py-1 px-2',
          sm: () => 'text-2.5 py-1.5 px-2.5',
          md: () => 'text-3 py-1.5 px-3',
          lg: () => 'text-3.5 py-2 px-3.5',
          xl: () => 'text-4 py-2 px-4',
        })(scale)}
        intentClassName={toIntentMatch({
          neutral: () => clsx('outline-neutral dark:outline-neutral'),
          light: () => clsx('outline-light dark:outline-light'),
          dark: () => clsx('outline-dark dark:outline-dark'),
          primary: () => clsx('outline-primary dark:outline-primary'),
          info: () => clsx('outline-info dark:outline-info'),
          success: () => clsx('outline-success dark:outline-success'),
          accent: () => clsx('outline-accent dark:outline-accent'),
          warning: () => clsx('outline-warning dark:outline-warning'),
          danger: () => clsx('outline-danger dark:outline-danger'),
        })(intent)}
        className={clsx(
          CLASSNAME,
          className,
          'block',
          'w-full',
          'bg-cream-1 text-space-1',
          'dark:bg-space-1 dark:text-cream-1',
          'disabled:bg-neutral-1 disabled:border-neutral-4 disabled:placeholder:text-neutral-light',
          'border border-light-3 dark:border-dark-7',
          'rounded-md',
          'caret-neutral',
        )}
      />
    );
  },
);

export { Input };
export default Input;
