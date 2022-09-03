import React from 'react';
import classnames from 'classnames';

import { RootIntentWeightType, RootIntentType, RootScale, toScaleMatch } from '../../../system';

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
  intent?: RootIntentType;

  /**
   * @default 600
   */
  intentWeight?: RootIntentWeightType;
}

const Input = React.forwardRef<Element, InputProps>(
  ({ className, intent = 'primary', scale = 'md', intentWeight = 600, ...rests }, ref) => {
    return (
      <input
        {...rests}
        ref={ref}
        id={rests.name}
        className={classnames(
          CLASSNAME,
          className,
          'block',
          'w-full',
          toScaleMatch({
            sm: () => 'py-1 px-2',
            md: () => 'py-2 px-3',
            lg: () => 'py-2.5 px-3.5',
          })(scale),
          'border border-light-400',
          `outline-${intent}-${intentWeight}`,
          `caret-${intent}-${intentWeight}`,
          'disabled:bg-dark-100 disabled:border-dark-100',
          'rounded-md',
        )}
      />
    );
  },
);

export { Input };
export default Input;
