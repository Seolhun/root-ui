import React from 'react';
import classnames from 'classnames';

import { IntentWeightType, IntentType, RootScale, toScaleMatch } from '@/system';

const CLASSNAME = 'Root__Button';
type Element = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface ButtonProps extends ExtensionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: IntentType;

  /**
   * @default 600
   */
  intentWeight?: IntentWeightType;
}

const Button = React.forwardRef<Element, ButtonProps>(
  ({ className, children, scale = 'md', intent = 'primary', intentWeight = 600, ...rests }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        {...rests}
        className={classnames(
          CLASSNAME,
          className,
          'inline-block',
          toScaleMatch({
            sm: () => 'text-3',
            md: () => 'text-3.5',
            lg: () => 'text-4',
          })(scale),
          toScaleMatch({
            sm: () => 'py-1 px-2',
            md: () => 'py-2 px-3',
            lg: () => 'py-2.5 px-3.5',
          })(scale),
          'text-white',
          'rounded-md',
          `bg-${intent}-${intentWeight} hover:bg-${intent}-${intentWeight - 100}`,
          `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-${intent}-${intentWeight}`,
          'placeholder:text-dark',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        )}
      >
        {children}
      </button>
    );
  },
);

export { Button };
export default Button;
