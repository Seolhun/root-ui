import React from 'react';
import classnames from 'classnames';

import { ColorWeight, IntentType, RootScale } from '@/types';
import { createColorByIntent, createOptionsColorByIntent } from '@/utils';

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
   * @default 500
   */
  intentWeight?: ColorWeight;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      intent = 'primary',
      scale = 'md',
      intentWeight = 500,
      ...rests
    },
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
          {
            'py-2 px-3': scale === 'sm',
            'py-2 px-4': scale === 'md',
            'py-3 px-6': scale === 'lg',
          },
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
