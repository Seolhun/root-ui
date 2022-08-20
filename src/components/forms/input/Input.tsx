import React from 'react';
import classnames from 'classnames';

import { IntentWeightType, IntentType, RootScale, toFocusIntentColor, toScaleStyles } from '@/system';

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
   * @default 500
   */
  intentWeight?: IntentWeightType;
}

const Input = React.forwardRef<Element, InputProps>(
  ({ className, intent = 'primary', scale = 'md', intentWeight = 500, ...rests }, ref) => {
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
          toScaleStyles(() => ['py-1 px-2'])(() => ['py-2 px-3'])(() => ['py-2.5 px-4'])(scale),
          'border border-gray-400 rounded-md',
          toFocusIntentColor({
            prefix: 'outline',
            intent,
            intentWeight,
          }),
        )}
      />
    );
  },
);

export { Input };
export default Input;
