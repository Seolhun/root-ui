import React from 'react';
import classNames from 'classnames';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';
import { Box } from '../../common';

const CLASSNAME = 'Root__Input';
type Element = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<Element>;
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

const Input = React.forwardRef<Element, InputProps>(
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
          default: () => classNames('outline-default dark:outline-default'),
          neutral: () => classNames('outline-neutral dark:outline-neutral'),
          light: () => classNames('outline-light dark:outline-light'),
          dark: () => classNames('outline-dark dark:outline-dark'),
          primary: () => classNames('outline-primary dark:outline-primary'),
          info: () => classNames('outline-info dark:outline-info'),
          success: () => classNames('outline-success dark:outline-success'),
          warning: () => classNames('outline-warning dark:outline-warning'),
          danger: () => classNames('outline-danger dark:outline-danger'),
        })(intent)}
        className={classNames(
          CLASSNAME,
          className,
          'block',
          'w-full',
          'bg-white dark:bg-dark-9',
          'text-dark-9 dark:text-light-1',
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
