import React from 'react';
import classnames from 'classnames';

import {
  IntentWeightType,
  IntentType,
  RootScale,
  toIntentColor,
  toFocusIntentColor,
  toHoverIntentColor,
  toPlaceholderIntentColor,
  toScaleMatch,
  toTypography,
} from '@/system';

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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
          toScaleMatch(() => [toTypography('3')])(() => [toTypography('3.5')])(() => [toTypography('4')])(scale),
          toScaleMatch(() => ['py-1 px-2'])(() => ['py-2 px-3'])(() => ['py-2.5 px-3.5'])(scale),
          'text-white',
          'rounded-md',
          toIntentColor({
            prefix: 'bg',
            intent,
            intentWeight,
          }),
          toHoverIntentColor({
            prefix: 'bg',
            intent,
            intentWeight: intentWeight - 100,
          }),
          toFocusIntentColor({
            prefix: 'ring-offset',
            intent,
            intentWeight,
          }),
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white',
          toPlaceholderIntentColor({
            prefix: 'text',
            intent: 'dark',
          }),
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
