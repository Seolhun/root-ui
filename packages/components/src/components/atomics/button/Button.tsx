import { RootIntentType, RootScaleType } from '@seolhun/root-tailwind-config';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Button';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface ButtonProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntentType;

  /**
   * Use outline style
   */
  outlined?: boolean;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScaleType;
}

export const Button = React.forwardRef<ElementType, ButtonProps>(
  ({ className, children, intent = 'primary', outlined, scale = 'md', ...others }, ref) => {
    return (
      <button
        role="button"
        tabIndex={0}
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'btn',
          `btn-scale-${scale}`,
          `${outlined ? `outlined-${intent}` : `solid-${intent}`}`,
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
