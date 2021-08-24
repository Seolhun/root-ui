import React from 'react';
import classnames from 'classnames';

import { ColorWeight, IntentType } from '@/types';
import { createColorByIntent, createOptionsColorByIntent } from '@/utils';

const CLASSNAME = 'SH__Button';
type Element = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface ButtonProps extends ExtensionProps {
  /**
   * @default primary
   */
  intent?: IntentType;

  /**
   * @default 500
   */
  intentWeight?: ColorWeight;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, intent = 'primary', intentWeight = 500, ...rests },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        {...rests}
        className={classnames(
          CLASSNAME,
          className,
          'inline-block',
          'py-2 px-4',
          'rounded-md',
          'text-white',
          createColorByIntent(intent, intentWeight, 'bg'),
          createOptionsColorByIntent(['hover'], 'bg', intent, intentWeight),
          createOptionsColorByIntent(
            ['focus'],
            'ring-offset',
            intent,
            intentWeight,
          ),
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white',
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
