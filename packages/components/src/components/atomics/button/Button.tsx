import clsx from 'clsx';
import * as React from 'react';

import { ButtonVariants, outlinedButton, solidButton } from './Button.styles';

const CLASSNAME = 'Root__Button';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export type ButtonProps = ElementProps & ButtonVariants;

export const Button = React.forwardRef<ElementType, ButtonProps>(
  ({ children, className, intent = 'primary', scale = 'md', variant = 'solid', ...others }, ref) => {
    const isSolid = variant === 'solid';
    const styles = isSolid ? solidButton : outlinedButton;
    return (
      <button
        type="button"
        role="button"
        tabIndex={0}
        {...others}
        className={clsx(
          CLASSNAME,
          styles({
            intent,
            scale,
            variant,
          }),
          className,
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
