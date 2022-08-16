import React from 'react';
import classnames from 'classnames';

import { ColorWeight, IntentType, RootScale } from '@/system';
import { toIntentColorByOptions } from '@/utils';

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
  intentWeight?: ColorWeight;
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
          {
            'py-1 px-1.5': scale === 'sm',
            'py-1.5 px-2': scale === 'md',
            'py-2 px-4': scale === 'lg',
          },
          'border border-gray-400 rounded-md',
          toIntentColorByOptions(['focus'], 'ring', intent, intentWeight),
          'shadow-sm',
        )}
      />
    );
  },
);

export { Input };
export default Input;
