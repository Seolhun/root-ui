import React from 'react';
import classnames from 'classnames';

import {
  IntentWeightType,
  IntentType,
  RootScale,
  toFocusIntentColor,
  toScaleMatch,
  toIntentColor,
  toDisabledIntentColor,
} from '@/system';

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
  intent?: IntentType;

  /**
   * @default 600
   */
  intentWeight?: IntentWeightType;
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
          toScaleMatch(() => ['py-1 px-2'])(() => ['py-2 px-3'])(() => ['py-2.5 px-3.5'])(scale),
          'border',
          toIntentColor({
            prefix: 'border',
            intent: 'light',
            intentWeight: 400,
          }),
          toFocusIntentColor({
            prefix: 'outline',
            intent,
            intentWeight,
          }),
          toIntentColor({
            prefix: 'caret',
            intent,
            intentWeight,
          }),
          toDisabledIntentColor({
            prefix: 'border',
            intent: 'dark',
            intentWeight: 100,
          }),
          toDisabledIntentColor({
            prefix: 'bg',
            intent: 'dark',
            intentWeight: 200,
          }),
          'rounded-md',
        )}
      />
    );
  },
);

export { Input };
export default Input;
