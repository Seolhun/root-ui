import React from 'react';
import classNames from 'classnames';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';

const CLASSNAME = 'Root__Input';
type Element = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export interface InputProps extends ExtensionProps {
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
  ({ className, intent = 'primary', scale = 'md', ...rests }, ref) => {
    return (
      <input
        {...rests}
        ref={ref}
        id={rests.name}
        className={classNames(
          CLASSNAME,
          className,
          'block',
          'w-full',
          'rounded-md',
          toScaleMatch({
            xs: () => 'text-2.5 py-2 px-3',
            sm: () => 'text-3 py-2 px-3',
            md: () => 'text-3.5 py-2 px-3',
            lg: () => 'text-4 py-2 px-4',
            xl: () => 'text-5 py-2.5 px-5',
          })(scale),
          toIntentMatch({
            neutral: () => classNames('outline-neutral dark:outline-neutral'),
            light: () => classNames('outline-light dark:outline-light'),
            dark: () => classNames('outline-dark dark:outline-dark'),
            primary: () => classNames('outline-primary dark:outline-primary'),
            info: () => classNames('outline-info dark:outline-info'),
            success: () => classNames('outline-success dark:outline-success'),
            warning: () => classNames('outline-warning dark:outline-warning'),
            danger: () => classNames('outline-danger dark:outline-danger'),
          })(intent),
          'text-neutral-darkest',
          'border border-neutral',
          'caret-neutral',
          'disabled:bg-neutral-lightest disabled:border-neutral-lighter disabled:placeholder:text-neutral-light',
        )}
      />
    );
  },
);

export { Input };
export default Input;
