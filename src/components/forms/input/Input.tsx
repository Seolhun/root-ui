import React from 'react';
import classNames from 'classnames';

import { RootIntentWeight, RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';

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

  /**
   * @default 600
   */
  intentWeight?: RootIntentWeight;
}

const Input = React.forwardRef<Element, InputProps>(
  ({ className, intent = 'primary', scale = 'md', intentWeight = 600, ...rests }, ref) => {
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
            sm: () => 'py-1 px-2',
            md: () => 'py-2 px-3',
            lg: () => 'py-2.5 px-3.5',
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
